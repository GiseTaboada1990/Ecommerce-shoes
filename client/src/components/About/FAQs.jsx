import styles from "./FAQs.module.css";
import { Link } from "react-router-dom";

export default function faqs() {
  return (
    <div>
      <div>
        <Link to="/">
          <button className={styles.yourshoes}>
            YOUR<span className={styles.shoes}>SHOES</span>
          </button>
        </Link>
      </div>
      <h1>PREGUNTAS FRECUENTES</h1>
      <h3>¿A cuánto ascienden los gastos de envio?</h3>
      <p>¡A nada! Los envios son gratis a todo el país.</p>
      <br />
      <h3>¿Cuánto tardará en llegar mi pedido?</h3>
      <p>
        Una vez que nuestro almacen termine la preparacion de tu pedido,
        YourShoes realizara la entrega en la direccion registrada en la orden de
        4 (cuatro) a 7 (siete) dias habiles en Ciudad Autonoma de Buenos Aires y
        hasta 10 (diez) dias habiles en resto del pais.
      </p>
      <h3>¿Qué tengo que hacer si he recibido un producto incorrecto?</h3>
      <br />
      <p>
        En caso de que YourShoes haya enviado un artículo diferente al
        solicitado, deberás comunicarte con cualquier miembro de nuestro staff
        via e-mail para iniciar un proceso de reclamo y devolución. En función a
        nuestra disponibilidad de inventarios, YourShoes hará nuevamente el
        envío del articulo originalmente pedido sin costo adicional para vos.
      </p>
      <h3>¿Cómo puedo gestionar el contenido de mi carrito?</h3>
      <p>
        Dentro de la tienda online, es posible realizar cambios en los productos
        que fueron agregados en "mi carrito", ya sea agregando un producto,
        varias cantidades de ese mismo producto, eliminando uno o varios
        productos, o limpiando el carrito completamente.
      </p>
      <br />
      <h3>¿Se pueden cancelar los pedidos realizados online?</h3>
      <p>
        Lamentablemente no es posible solicitar la cancelación de un pedido una
        vez que hayas realizado el pago del mismo. Cuando hayas recibido tu
        pedido podes inciar un reclamo via e-mail con nuestro staff solicitando
        un cambio de tu artículo.
      </p>
      <br />
      <h3>¿Es necesario crear un cuenta para comprar en YourShoes?</h3>
      <p>
        Registrarte es necesario, ya que en el formulario de registro va a
        figurar tu localidad y direccion a la podremos enviar el artículo
        solicitado.
      </p>
      <br />
      <h3>¿Dónde puedo presentar un reclamo o felicitarlos por algo?</h3>
      <p>
        Para YourShoes tu experiencia de compra y servicio es lo más importante,
        por eso nos interesa tu opinion. En la parte del detalle de cualquier
        artículo podras ver una seccion de "Opiniones", ahí podrás dejar
        cualquier comentario sobre tu experiencia de compra y producto (sea
        buena o mala).
      </p>
      <br />
      <h3>¿Cómo puedo crear una cuenta?</h3>
      <p>
        ¡Crear una cuenta es muy fácil y rápido! Podes crear una cuenta
        YourShoes asociada a tu correo electronico o podes registrate con tu
        cuenta de Google.
      </p>
      <p>
        Creá una cuenta YourShoes: 1. Hacé click en el icono de "persona" en la
        esquina superior derecha de nuestra pagina web y luego elegi
        "Registrate" o "Accede con google". 2. En caso de elegir la opcion de
        "Registrate", introducí los datos personales necesario en el formulario
        de registro. 3. Hacé click en "Enviar". 4. Finalmente ingresa el e-mail
        y contraseña con el que te hayas registrado.
      </p>
      <br />
      <h3>¿Cómo me suscribo a las newsletters de YourShoes?</h3>
      <p>
        Enterate antes que nadie acerca de los lanzamientos, ofertas y
        promociones de YourShoes! En la pagina inicial de YourShoes, ubica la
        barra "footer" en la seccion inferior de la pagina, ingresa en correo
        electronico en donde deseas recibir las notificaciones y listo!
      </p>
    </div>
  );
}
