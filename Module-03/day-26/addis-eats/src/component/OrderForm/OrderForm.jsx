import { useState } from "react";

function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const phoneValid = /^(09\d{8}|\+2519\d{8})$/.test(
    formData.phone
  );

  const formValid =
    formData.name.trim().length >= 2 &&
    phoneValid &&
    formData.area.trim() !== "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!formValid) return;

    console.log("Order:", formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Delivery Details</h2>

      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="0912345678"
        value={formData.phone}
        onChange={handleChange}
      />

      <input
        name="area"
        placeholder="Area"
        value={formData.area}
        onChange={handleChange}
      />

      <button disabled={!formValid}>
        Place Order
      </button>
    </form>
  );
}

export default OrderForm;