"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddToWishlist = AddToWishlist;
exports.RemoveWishlistItem = RemoveWishlistItem;
exports.ClearWishlist = ClearWishlist;
exports.WishlistItemsCount = WishlistItemsCount;
exports.IsItemInWishlist = IsItemInWishlist;
exports.IsWishlistEmpty = IsWishlistEmpty;
exports.WishlistItems = WishlistItems;

var _reactUseWishlist = require("react-use-wishlist");

function AddToWishlist(_ref) {
  var id = _ref.id,
      price = _ref.price;

  var _useWishlist = (0, _reactUseWishlist.useWishlist)(),
      addWishlistItem = _useWishlist.addWishlistItem;

  addWishlistItem({
    id: id,
    price: price
  });
}

function RemoveWishlistItem(_ref2) {
  var id = _ref2.id;

  var _useWishlist2 = (0, _reactUseWishlist.useWishlist)(),
      removeWishlistItem = _useWishlist2.removeWishlistItem;

  removeWishlistItem(id);
}

function ClearWishlist() {
  var _useWishlist3 = (0, _reactUseWishlist.useWishlist)(),
      emptyWishlist = _useWishlist3.emptyWishlist;

  emptyWishlist();
}

function WishlistItemsCount() {
  var _useWishlist4 = (0, _reactUseWishlist.useWishlist)(),
      wishlistTotal = _useWishlist4.wishlistTotal;

  return wishlistTotal;
}

function IsItemInWishlist(_ref3) {
  var id = _ref3.id;

  var _useWishlist5 = (0, _reactUseWishlist.useWishlist)(),
      inWishlist = _useWishlist5.inWishlist;

  return inWishlist(id) ? true : false;
}

function IsWishlistEmpty() {
  var _useWishlist6 = (0, _reactUseWishlist.useWishlist)(),
      isWishlistEmpty = _useWishlist6.isWishlistEmpty;

  return isWishlistEmpty;
}

function WishlistItems() {
  var _useWishlist7 = (0, _reactUseWishlist.useWishlist)(),
      items = _useWishlist7.items;

  return items;
}