let compJson = `{
    "company": "EYDelta Pvt Ltd",
    "location": "Bangalore, India",
    "employees": [
        {
            "id": 101,
            "name": "Jitendra Parit",
            "position": "CTO",
            "skills": [
                "Motor Design",
                "Embedded Systems",
                "Product Strategy"
            ],
            "projects": [
                {
                    "name": "Drone BLDC Motor",
                    "status": "Ongoing",
                    "technologies": [
                        "Aluminum Rotor",
                        "Sensorless FOC",
                        "KiCad PCB"
                    ]
                },
                {
                    "name": "Robotic Actuator",
                    "status": "Completed",
                    "technologies": [
                        "Closed-loop Control",
                        "CAN Bus"
                    ]
                }
            ]
        },
        {
            "id": 102,
            "name": "Amit Sharma",
            "position": "Embedded Software Engineer",
            "skills": [
                "C++",
                "RTOS",
                "INAV"
            ],
            "projects": [
                {
                    "name": "Smart BMS",
                    "status": "In R&D",
                    "technologies": [
                        "Li-Ion Safety",
                        "CAN",
                        "Python Automation"
                    ]
                }
            ]
        }
    ]
}`;
let compJs = JSON.parse(compJson)
console.log(compJs);
//console.dir(compJs, { depth: null });