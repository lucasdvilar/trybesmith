export interface IOrder {
  id: number,
  userId: number,
}

export interface IOrderWithProducts extends IOrder {
  productsIds: number[],
}

export interface IOrderInfo {
  productsIds: number[],
  userId: number,
}
