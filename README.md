# MINE GUARD

## AI-Enabled Low-Cost Mine Subsidence Monitoring and Early Warning System

Mine Guard is a low-cost real-time monitoring system designed to detect abnormal ground movement and provide early warnings in underground coal mines.

The system combines multiple sensors with ESP32-based processing, wireless communication, AI-based risk analysis, and a web dashboard. It continuously monitors ground displacement, tilt, vibration, and crack development to identify changes that may indicate increasing subsidence risk.

The main goal is to provide a practical and scalable monitoring system that can be deployed across different sections of a mine.



## Problem Statement

Underground coal mines can experience ground deformation, subsidence, cracking, vibration, and other structural changes. Detecting these changes early is important because sudden ground movement can create dangerous conditions for workers and mining operations.

Traditional monitoring methods may depend on periodic inspections or expensive monitoring equipment. Mine Guard aims to provide continuous monitoring using affordable and easily available electronic components.



## Proposed Solution

Mine Guard uses a distributed network of sensor nodes installed at different monitoring locations.

Each sensor node collects information about the surrounding ground conditions. The ESP32 processes the sensor readings and transmits the information wirelessly to nearby nodes or a master node.

The collected data is then analyzed to identify abnormal changes and estimate the level of subsidence risk.

The monitoring system consists of five major stages:

1. Sensor data collection
2. Local data processing
3. Wireless data transmission
4. Risk analysis
5. Warning and visualization



## How the System Works

The sensor node continuously reads data from the connected sensors.

### 1. Ground Displacement Measurement

The HC-SR04 ultrasonic sensor measures the distance between the sensor and the monitored ground or model platform.

Changes in the measured distance are used to identify ground displacement or subsidence.

### 2. Ground Tilt Measurement

The MPU6050 measures changes in tilt and movement.

A change in the orientation of the monitored platform can indicate ground movement or structural instability.

### 3. Vibration Detection

The SW-420 vibration sensor detects abnormal vibrations.

Sudden or unusual vibration activity can be considered along with the other sensor readings during risk analysis.

### 4. Crack Detection

A 2.2-inch flex sensor is used for crack or bending detection.

When the monitored structure bends, the resistance of the flex sensor changes. This change can be used to identify crack widening or structural deformation in the prototype.

### 5. Data Processing

The ESP32 receives the readings from all the sensors and processes the collected information.

Current measurements are compared with previous measurements to identify changes and movement trends.

The system can then classify the monitored area into different risk conditions.

### 6. Warning

When abnormal ground movement is detected, the system generates an alert.

A buzzer is used in the prototype to provide an immediate audible warning.

The web dashboard can also display the current readings, risk level, and alerts.



## System Architecture

The basic data flow of Mine Guard is:

Sensors
↓
ESP32 Sensor Node
↓
Data Processing
↓
Comparison With Previous Readings
↓
Movement Trend Analysis
↓
AI / Risk Analysis
↓
Subsidence Risk Assessment
↓
Risk Classification
↓
Warning / Alarm
↓
Web Dashboard and GIS Visualization

The system can be expanded by adding multiple sensor nodes across different sections of a mine.



## Hardware Components

### ESP32

The ESP32 acts as the main controller of the sensor node.

It collects sensor readings, performs local processing, and provides wireless communication.

### HC-SR04 Ultrasonic Sensor

Used to measure ground displacement by measuring the distance between the sensor and the monitored surface.

### MPU6050

Used to measure tilt and movement of the monitored ground or prototype platform.

### SW-420 Vibration Sensor

Used to detect abnormal vibrations.

### Flex Sensor 2.2"

Used for detecting bending or changes associated with crack widening in the prototype.

### Buzzer

Provides an audible warning when abnormal conditions are detected.

### Moving Ground / Model Platform

A physical platform is used to simulate ground movement and subsidence during prototype testing.



## Software

### Arduino IDE

Arduino IDE is used to program the ESP32 and interface with the connected sensors.

### Web Dashboard

The dashboard displays:

- Real-time sensor readings
- Current risk level
- Alerts
- Deformation information
- Monitoring information from sensor nodes

### Cloud / Database

Sensor readings and historical data can be stored for later analysis and monitoring.

Historical data can also be used to study deformation trends over time.

### GIS Visualization

GIS-based visualization can be used to display monitored mine areas and highlight locations with increasing subsidence risk.



## Wireless Sensor Network

Mine Guard is designed around a distributed sensor network.

Instead of depending on a single sensor location, multiple sensor nodes can be installed at different locations.

Each node collects local sensor data and sends the information through the wireless network.

The data can be relayed through nearby nodes until it reaches the main monitoring system.

This approach allows the system to cover larger areas by adding more sensor nodes.



## Risk Detection

Mine Guard does not depend on a single sensor reading.

Ground displacement, tilt, vibration, and crack-related measurements can be considered together.

The system compares current readings with previous measurements and analyzes movement trends.

This allows the system to identify gradual changes as well as abnormal conditions.

The risk assessment can be divided into conditions such as:

- Normal Monitoring
- Elevated Risk
- High Risk

When the system detects abnormal ground movement, it can generate an early warning.

Site-specific calibration and testing can be used to determine suitable thresholds for different mine environments.



## Dynamic Risk Mapping

One of the main features of Mine Guard is dynamic risk mapping.

Sensor readings from different locations can be associated with their corresponding areas on a mine map.

The monitoring interface can then highlight areas where deformation or abnormal sensor activity is increasing.

This provides a visual representation of the current condition of different sections instead of displaying only individual sensor values.



## Smart Escape Routing

The proposed system also includes a smart escape-routing concept.

When a high-risk area is detected, the wireless sensor network can be used to identify safer routes based on the monitored risk zones.

The system can also be extended to update exit indicators or warning lights to guide workers away from affected areas.

This feature is intended as a future expansion of the monitoring and warning system.



## Advanced Monitoring

The proposed architecture can be extended with additional technologies such as:

- Fiber-optic sensing
- LiDAR
- Seismic sensing

These technologies can provide additional information about ground movement and underground conditions.

The current prototype focuses on low-cost sensors so that the basic monitoring concept can be demonstrated using easily available components.



## Prototype

More than 70% of the prototype has been completed.

The prototype uses a physical moving-ground model to safely demonstrate subsidence conditions.

The model allows different types of movement to be introduced and observed through the connected sensors.

The prototype demonstrates the basic process of:

Sensor Measurement
→ ESP32 Processing
→ Data Analysis
→ Risk Detection
→ Warning

This provides a practical demonstration of how the system could operate before deployment in an actual mine environment.



## Innovation and Novelty

### 1. Dynamic Risk Mapping

Instead of showing only raw sensor values, the system can display the monitored mine area and highlight sections with increasing risk.

This makes the information easier for operators to understand and act upon.

### 2. Multi-Sensor Monitoring

The system combines different types of measurements:

- Displacement
- Tilt
- Vibration
- Crack development

Using multiple parameters provides more information about the condition of the monitored area.

### 3. Distributed Wireless Monitoring

Multiple low-cost sensor nodes can be deployed at different locations.

The wireless network allows monitoring information to be transferred between nodes and eventually reach the main monitoring system.

### 4. Trend-Based Risk Assessment

The system compares current sensor readings with previous readings instead of considering only one measurement.

This allows changes in ground conditions to be observed over time.

### 5. Smart Escape Routing

The proposed system can use detected risk zones to identify safer paths and update warning or exit indicators.

### 6. Expandable Monitoring Platform

The prototype can be upgraded with industrial-grade sensors and additional monitoring technologies without changing the basic system architecture.



## Feasibility

Mine Guard is designed using affordable and commercially available components.

The ESP32, HC-SR04, MPU6050, vibration sensor, and flex sensor can be used to build the prototype at relatively low development cost.

The system can also be tested safely using a physical ground model rather than an actual mining environment.

Multiple sensor units can be added when monitoring coverage needs to be increased.



## Scalability

The system is designed to grow from a small prototype into a larger monitoring network.

A possible deployment structure is:

Sensor Node 1
        ↓
Sensor Node 2 → Master Node → Control Room
        ↑
Sensor Node 3

Additional sensor nodes can be installed at different mine locations.

Each node can monitor its local area and transmit the collected information through the wireless network.



## Challenges and Proposed Solutions

### Sensor Accuracy

Sensor measurements can vary due to environmental conditions and sensor limitations.

Calibration and data filtering can be used to improve measurement reliability.

### Harsh Mining Environment

Dust, moisture, vibration, and physical damage can affect electronic components.

Protective enclosures can be used to protect the sensors and controller.

### Wireless Connectivity

Wireless communication may not always be reliable in underground environments.

Multiple nodes and local data storage can help maintain monitoring capability when communication is temporarily unavailable.

### False Alarms

A single sensor may sometimes produce an abnormal reading.

Sensor fusion and AI-based filtering can be used to reduce unnecessary warnings.

### Site-Specific Calibration

Different mines can have different geological and environmental conditions.

The system therefore requires site-specific testing and threshold calibration before practical deployment.

### Power Supply

Sensor nodes require a reliable power source.

Backup power systems can be added to maintain operation during power interruptions.

### System Reliability

Regular maintenance and sensor-fault detection are required to maintain reliable monitoring.



## Future Enhancements

### Temperature Monitoring

A temperature sensor can be added to monitor temperature changes that may influence sensor readings and ground conditions.

### Large-Scale Mine Risk Mapping

Data from multiple sensor nodes can be combined to create a larger mine-wide risk map.

### Improved False Alarm Detection

Additional environmental information can be incorporated to distinguish rainfall-related ground movement from abnormal subsidence.

### Industrial-Grade Sensors

The prototype sensors can be replaced or supplemented with industrial-grade monitoring equipment for real-world deployment.

### Additional Sensing Technologies

Fiber optics, LiDAR, and seismic sensing can be integrated to improve ground and underground structure monitoring.

### Existing Mine System Integration

The system can eventually be connected to existing mine monitoring and emergency-warning infrastructure.



## Impact and Benefits

### Mine Workers

Provides early warnings when abnormal ground movement is detected and helps improve awareness of unsafe areas.

### Mine Operators

Provides continuous monitoring information instead of relying only on periodic inspections.

### Safety and Rescue Teams

Provides additional information that can support faster decisions during ground instability.

### Mining Engineers

Provides sensor readings and deformation trends that can assist stability assessment.

### Mine Management

Provides a centralized view of sensor conditions and risk levels across monitored areas.



## Economic Benefits

The proposed system focuses on affordable and commercially available components.

Its modular architecture allows additional sensor nodes to be added when required.

This makes it possible to start with a small monitoring system and expand the deployment gradually.

Continuous monitoring can also help identify developing problems earlier, potentially reducing damage to mine infrastructure.



## Project Status

Prototype completion: More than 70%

Current prototype includes:

- ESP32
- HC-SR04 ultrasonic sensor
- MPU6050
- SW-420 vibration sensor
- Flex sensor
- Buzzer
- Moving ground simulation platform
- Sensor data processing
- Monitoring dashboard concept



## Technology Stack

### Hardware

ESP32  
HC-SR04  
MPU6050  
SW-420  
Flex Sensor 2.2"  
Buzzer  
Prototype Ground Platform

### Programming and Development

Arduino IDE  
ESP32  
Web Dashboard  
Cloud / Database

### Monitoring and Visualization

Real-Time Sensor Monitoring  
Risk Classification  
GIS-Based Visualization  
Historical Data Analysis



## Expected Outcome

The expected outcome of Mine Guard is a low-cost distributed monitoring system capable of continuously observing ground conditions and providing early warnings when abnormal movement is detected.

The system combines physical sensing, wireless communication, data analysis, risk visualization, and warning mechanisms into a single monitoring platform.

The prototype demonstrates the basic concept using a controlled physical model and can be further developed for larger-scale testing and integration with industrial monitoring systems.



## Research Background

The project is supported by research related to mine deformation and subsidence monitoring.

### Rajgamar Coal Mine, Korba, Chhattisgarh

Research on underground mine deformation monitoring using Synthetic Aperture Radar techniques provides background for monitoring deformation in mining regions.

### Raniganj Coalfield, India

Research has investigated surface deformation monitoring using advanced InSAR and DGPS techniques.

### Jharia-Dhanbad Coal Mining Region

Ground caving and subsidence in the Jharia-Dhanbad region have been associated with factors such as abandoned mine workings, coal fires, and water seepage.

### DGMS

The DGMS Annual Report 2024 highlights the importance of subsidence monitoring, surface surveys, monitoring stations, and early detection for improving safety in underground coal mines.



## References

1. Research on underground mine deformation monitoring using Synthetic Aperture Radar, Rajgamar Coal Mine, Korba, Chhattisgarh.

2. Research on surface deformation monitoring of the Raniganj coalfield using advanced InSAR and DGPS.

3. Research and reports related to ground caving and subsidence incidents in the Jharia-Dhanbad coal mining belt.

4. Directorate General of Mines Safety (DGMS), Government of India, Annual Report 2024.





## Project Vision

Mine Guard aims to make continuous mine subsidence monitoring more accessible by combining low-cost sensing hardware, wireless communication, data analysis, and real-time visualization.

The system is designed as a modular platform so that additional sensors, monitoring technologies, and safety features can be introduced as the project develops.
