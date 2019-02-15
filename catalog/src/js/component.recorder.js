Container.register('quantityAction', QuantityActions);
Container.register('quantityComponent', QuantityComponent);

Container.register('catalogItemActions', CatalogItemActions);
Container.register('catalogItem', CatalogItemComponent);
Container.register('catalogItemsService', CatalogItemsService);
Container.register('catalogItems', CatalogItemsComponent)


Container.register('cartItemActions', CartItemActions);
Container.register('cartItem', CartItemComponent);
Container.register('cartItemsService', CartItemsService);
Container.register('cartItems', CartItemsComponent);

Container.run(Main);