async function fetchAccessPackage() {
    const token = "in token";
    const endpoint = "https://graph.microsoft.com/v1.0/identityGovernance/entitlementManagement/accessPackages";

    const response = await fetch(endpoint , {
        method: "GET",
        headers: {
            "Authorization": `Bearer $(token)`,
            "Content-Type": "application/json"
        }
    });

    const data = await response.json();
    const output = document.getElementById("output");

    if (data.value) {
        output.textContent = JSON.stringify(data.value, null, 2);
    } else {
        output.textContent = "not found";
    }
}