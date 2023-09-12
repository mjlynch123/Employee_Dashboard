// Get a reference to the table body
const tableBody = document.querySelector("tbody");

const orders = [
  {
    id: 1,
    name: "John Appleseed",
    email: "johnappleseed@gmail.com",
    product: "iPhone 12",
    total: 999,
    date: "2021-01-01",
    status: "Approved",
    payment: "Credit Card",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@yahoo.com",
    product: "Macbook Pro",
    total: 1999,
    date: "2021-01-02",
    status: "Pending",
    payment: "Paypal",
  },
  {
    id: 3,
    name: "Joe Doe",
    email: "joe89@outlook.com",
    product: "Airpods",
    total: 199,
    date: "2021-01-03",
    status: "Declined",
    payment: "Credit Card",
  },
];

function getStatusColorClass(status) {
  switch (status) {
    case "Approved":
      return "status-green";
    case "Declined":
      return "status-red";
    case "Pending":
      return "status-yellow";
    default:
      return "";
  }
}

// Loop through the orders and create a table row for each order
orders.forEach((order) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
      <td>${order.id}</td>
      <td>${order.name}</td>
      <td>${order.product}</td>
      <td>${order.date}</td>
      <td>${order.payment}</td>
       <td class="${getStatusColorClass(order.status)}">${order.status}</td>
    `;
  tableBody.appendChild(newRow);
});
