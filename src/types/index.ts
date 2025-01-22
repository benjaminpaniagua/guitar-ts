export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type CartItem = Guitar & {
    quantity: number
}

export type GuitarID = Guitar['id'] // se crea el type para el id especificamente solo de id
// export type GuitarID = Pick<Guitar, 'id'>


