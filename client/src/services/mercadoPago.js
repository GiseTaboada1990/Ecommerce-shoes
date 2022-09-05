import axios from "axios"

export const mercadoPago = (cart) => {

    let datos = null

    const user = JSON.parse(localStorage.getItem('user'))

    console.log('USER_FROM_LOCAL_STORAGE', user)

    if (cart.length > 0) {
        axios
            .post(`${process.env.REACT_APP_URL}/payments`, { userId: user.id, as: cart })
            .then((res) => {
                datos = res.data
                localStorage.setItem("products", JSON.stringify([]))
                console.info("Contenido de data:", res)
            })
            .catch((err) => console.log(err))
    }

    return datos
}

