// Pre-configured Blynk Network Tokens with your keys
const tokenNode1 = "CQ4aJLKFAS-gUCxnGIQm2jBqJ3tv8dYD";
const tokenNode2 = "-zOMu1j1kONnMP9TaOIvw5SJXysQxBJms";

/**
 * Sends a background HTTPS request to the Bangalore (blr1) Blynk server
 */
async function getCloudMetric(token, targetPin) {
    // FIXED URL STRING: Added external/api/get and explicit regional routing
    const apiEndpoint = `https://blynk.cloud{token}&${targetPin}`;
    
    try {
        const response = await fetch(apiEndpoint, {
            method: 'GET',
            mode: 'cors'
        });
        
        if (!response.ok) throw new Error("Stream connection failed");
        const rawText = await response.text();
        return rawText.trim(); 
    } catch (err) {
        console.error(`Error pipeline ${targetPin}:`, err);
        return "ERR";
    }
}

/**
 * Safely inserts numbers into HTML text structures and handles offline flags
 */
function updateDisplayField(elementId, value, appendUnit) {
    const field = document.getElementById(elementId);
    if (!field) return;

    if (value === "ERR" || value === "" || value === "null" || value === "NaN") {
        field.innerHTML = `Offline`;
        field.style.color = "#f87171"; 
    } else {
        const cleanNum = parseFloat(value);
        field.innerHTML = !isNaN(cleanNum) ? `${cleanNum.toFixed(2)} <span class="unit">${appendUnit}</span>` : value;
        field.style.color = "#ffffff"; 
    }
}

/**
 * Main application loop that collects data from both nodes and updates the UI
 */
async function queryDashboardMetrics() {
    // 1. Fetch Node 1 streams from the cloud (Capital 'V' matches hardware sketch calls)
    const node1Distance = await getCloudMetric(tokenNode1, "V1");
    const node1Tilt = await getCloudMetric(tokenNode1, "V2");
    const networkStatusMsg = await getCloudMetric(tokenNode1, "V5");

    // 2. Fetch Node 2 streams from the cloud
    const node2Distance = await getCloudMetric(tokenNode2, "V3");
    const node2Tilt = await getCloudMetric(tokenNode2, "V4");

    // 3. Render numbers into your HTML framework IDs
    updateDisplayField("n1-dist", node1Distance, "cm");
    updateDisplayField("n1-tilt", node1Tilt, "°");
    updateDisplayField("n2-dist", node2Distance, "cm");
    updateDisplayField("n2-tilt", node2Tilt, "°");

    // 4. Update the structural status banner background colors dynamically
    const statusContainer = document.getElementById("status-card");
    const statusTextLabel = document.getElementById("status-text");

    if (statusTextLabel && statusContainer) {
        if (networkStatusMsg !== "ERR" && networkStatusMsg !== "") {
            statusTextLabel.innerText = networkStatusMsg;
            
            if (networkStatusMsg.toUpperCase().includes("CRITICAL")) {
                statusContainer.className = "status-box state-critical";
            } else {
                statusContainer.className = "status-box state-normal";
            }
        } else {
            statusTextLabel.innerText = "System Active. Awaiting Sensor Data Link...";
            statusContainer.className = "status-box";
        }
    }
}

// Fire the network query instantly the second the page loads
queryDashboardMetrics();

// Repeat this process automatically every 3000 milliseconds
setInterval(queryDashboardMetrics, 3000);