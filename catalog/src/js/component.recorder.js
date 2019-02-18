import QuantityActions from './actions/quantity.actions';
import QuantityComponent from './components/quantity.component';
import CatalogItemService from './services/catalog-item.service';
import CatalogItemActions from './actions/catalog-item.actions';
import CatalogItemComponent from './components/catalog-item.component';
import CatalogItemsService from './services/catalog-items.service';
import CatalogItemsComponent from './components/catalog-items.component';
import CartItemActions from './actions/cart-item.actions';
import CartItemComponent from './components/cart-item.component';
import CartItemsService from './services/cart-items.service';
import CartItemsComponent from './components/cart-items.component';

Container.register('quantityAction', QuantityActions);
Container.register('quantityComponent', QuantityComponent);

Container.register('catalogItemService', CatalogItemService);
Container.register('catalogItemActions', CatalogItemActions);
Container.register('catalogItem', CatalogItemComponent);
Container.register('catalogItemsService', CatalogItemsService);
Container.register('catalogItems', CatalogItemsComponent)


Container.register('cartItemActions', CartItemActions);
Container.register('cartItem', CartItemComponent);
Container.register('cartItemsService', CartItemsService);
Container.register('cartItems', CartItemsComponent);

Container.run(Main);