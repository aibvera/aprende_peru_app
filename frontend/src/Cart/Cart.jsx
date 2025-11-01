import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart({ currentUser }) {
  const navigate = useNavigate();
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  // Cargar carrito desde sessionStorage
  useEffect(() => {
    const carritoGuardado = JSON.parse(sessionStorage.getItem('carrito')) || [];
    setCarrito(carritoGuardado);

    // Calcular total
    const totalCalculado = carritoGuardado.reduce((suma, curso) => suma + parseFloat(curso.precio), 0);
    setTotal(totalCalculado);
  }, []);

  // Confirmar pedido
  const handleConfirmarPedido = () => {
    // Verificar si el usuario está logeado
    if (!currentUser) {
      alert('Debes iniciar sesión para confirmar tu pedido.');
      navigate('/login');
      return;
    }

    if (carrito.length === 0) {
      alert('Tu carrito está vacío 🛒');
      return;
    }

    alert('✅ Pedido confirmado. Gracias por tu compra!');
    sessionStorage.removeItem('carrito');
    setCarrito([]);
    setTotal(0);
  };

  return (
    <main className="cart-main">
      <h2>Tu carrito</h2>

      {carrito.length > 0 ? (
        <>
          <div className="cart-items">
            {carrito.map(curso => (
              <div key={curso.id} className="cart-item">
                <img src={curso.imagen} alt={curso.nombre} className="cart-item-image" />

                <div className="cart-item-details">
                  <h3>{curso.nombre}</h3>
                  <p><strong>Nivel:</strong> {curso.nivel}</p>
                  <p><strong>Duración:</strong> {curso.duracion}</p>
                </div>

                <div className="cart-item-price">
                  <p className="price">S/{curso.precio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Resumen del pedido</h3>
            {/*<div className="summary-row">
              <span>Cupon de descuento:</span>
              <span>S/{total}</span>
            </div>*/}
            <div className="summary-row total">
              <span>Total:</span>
              <span>S/{total}</span>
            </div>
          </div>

          <button className="btn-confirmar" onClick={handleConfirmarPedido}>
            Confirmar pedido
          </button>
        </>
      ) : (
        <p className="empty-cart">No tienes cursos seleccionados.</p>
      )}
    </main>
  );
}

export default Cart;