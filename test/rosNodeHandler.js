let ros;

function connectToCustomROS() {
    const customRosIP = document.getElementById("ros-ip").value;

    ros = new ROSLIB.Ros({ url: `ws:${customRosIP}:9090` });

    ros.on("connection", () => {
        document.getElementById("status").innerText = "successful";
        subscribeToTerminalTopic();
        subscribeToFirstNodeTopic();
    });

    ros.on("error", (error) => {
        document.getElementById("status").innerText = `errored out (${error})`;
    });

    ros.on("close", () => {
        document.getElementById("status").innerText = "closed";
    });
}

function subscribeToTerminalTopic() {
    const terminalTopicListener = new ROSLIB.Topic({
        ros,
        name: "/terminal_topic",
        messageType: "std_msgs/String",
    });

    terminalTopicListener.subscribe((message) => {
        const ul = document.getElementById("terminal-messages");
        const newMessage = document.createElement("li");

        const now = new Date();
        const hour = String(now.getHours()).padStart(2, "0");
        const minute = String(now.getMinutes()).padStart(2, "0");
        const timestamp = `[${hour}:${minute}]`;

        newMessage.appendChild(
            document.createTextNode(`${timestamp} - ${message.data}`)
        );
        ul.appendChild(newMessage);
    });
}

function subscribeToFirstNodeTopic() {
    const firstNodeTopicListener = new ROSLIB.Topic({
        ros: ros,
        name: "/first_node_topic",
        messageType: "std_msgs/String",
    });

    firstNodeTopicListener.subscribe(function (message) {
        const ul = document.getElementById("first-node-messages");
        const newMessage = document.createElement("li");

        const now = new Date();
        const hour = String(now.getHours()).padStart(2, "0");
        const minute = String(now.getMinutes()).padStart(2, "0");
        const timestamp = `[${hour}:${minute}]`;

        newMessage.appendChild(
            document.createTextNode(`${timestamp} - ${message.data}`)
        );
        ul.appendChild(newMessage);
    });
}
