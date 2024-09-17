var host = "http://localhost:8080";
var applicationPath = host + "/my-web-test";

function getSimpleMessage() {
    var url = applicationPath + "/test/get-simple-message";
    var httpConnection = new XMLHttpRequest();
    httpConnection.open("GET", url, false);
    httpConnection.send(null);
    var responseTest = httpConnection.responseText;
    var jsonObj = JSON.parse(responseTest);
    var messageDiv = document.getElementById("sampleMessage");
    messageDiv.innerHTML = jsonObj.message;
}

function getMessageParams() {
    var url = applicationPath + "/test/get-message-param?messageparam=Ram Niwash Mehla";
    var httpConnection = new XMLHttpRequest();
    httpConnection.open("GET", url, false);
    httpConnection.send(null);
    var responseTest = httpConnection.responseText;
    var jsonObj = JSON.parse(responseTest);
    var messageDiv = document.getElementById("sampleMessage");
    messageDiv.innerHTML = jsonObj.message;
}

function getMessageParams2() {
    var url = applicationPath + "/test/get-message-param";
    var httpConnection = new XMLHttpRequest();
    httpConnection.open("GET", url, false);
    httpConnection.send("messageparam=Rakesh Kumar Mehla");
    var responseTest = httpConnection.responseText;
    var jsonObj = JSON.parse(responseTest);
    var messageDiv = document.getElementById("sampleMessage");
    messageDiv.innerHTML = jsonObj.message;
}

function postMessageParam() {
    var url = applicationPath + "/test/post-message-param";
    var httpConnection = new XMLHttpRequest();
    httpConnection.open("POST", url, false);
    httpConnection.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    httpConnection.send("messageparam=Rakesh Kumar Mehla");
    var responseTest = httpConnection.responseText;
    var jsonObj = JSON.parse(responseTest);
    var messageDiv = document.getElementById("sampleMessage");
    messageDiv.innerHTML = jsonObj.message;
}

function postJSONRequestResponse() {
    var url = applicationPath + "/test/post-json-request-response";
    var httpConnection = new XMLHttpRequest();
    httpConnection.open("POST", url, false);
    httpConnection.setRequestHeader("Content-Type", "application/json");
    var obj = { studentID: "STU-001", name: "Parhald Sinver", rollNo: 6 };
    httpConnection.send(JSON.stringify(obj));
    var responseTest = httpConnection.responseText;
    var jsonObj = JSON.parse(responseTest);
    var messageDiv = document.getElementById("sampleMessage");
    messageDiv.innerHTML = jsonObj.responseObject.name;
}

function postXMLRequestResponse() {
    var url = applicationPath + "/test/post-xml-request-response";
    var httpConnection = new XMLHttpRequest();
    httpConnection.open("POST", url, false);
    httpConnection.setRequestHeader("Content-Type", "application/xml");
    var xmlData = "<employee><employee-id>EMP-001</employee-id><name>Virender Singh Sinver</name><salary>250000</salary></employee>";
    httpConnection.send(xmlData);
    var responseTest = httpConnection.responseText;
    var messageDiv = document.getElementById("sampleMessage");
    messageDiv.innerHTML = responseTest;
}

function postUploadFile() {
    var url = applicationPath + "/test/post-upload-file";
    var httpConnection = new XMLHttpRequest();
    httpConnection.open("POST", url, false);
    httpConnection.setRequestHeader("Content-Type", "multipart/form-data");
    var files = document.getElementById("customFile");
    var formData = new FormData();
    formData.append("myFile", files);
    httpConnection.send(formData);
    var responseTest = httpConnection.responseText;
    var messageDiv = document.getElementById("sampleMessage");
    messageDiv.innerHTML = responseTest;
}

function getDownloadFile() {
    var url = applicationPath + "/test/get-download-file?fileName=language-code.json";
    var httpConnection = new XMLHttpRequest();
    httpConnection.open("GET", url, false);
    httpConnection.send();
    var responseObject = httpConnection.responseText;
    var messageDiv = document.getElementById("sampleMessage");
    messageDiv.innerHTML = responseObject;
}

function postDownloadFile() {
    var url = applicationPath + "/test/post-download-file";
    var httpConnection = new XMLHttpRequest();
    httpConnection.open("POST", url, false);
    httpConnection.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    httpConnection.send("fileName=ftp.ico");
    var responseObject = httpConnection.responseText;
    var messageDiv = document.getElementById("sampleMessage");
    messageDiv.innerHTML = responseObject;
}