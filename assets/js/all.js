"use strict";

var container = null;
var cart_blank = null;
var cart = null;
var shopping_cart_btn = null;
var step_2 = null;
var step_3 = null;
var step_4 = null;
var readonly = null;
var edit_mode = null;
var checkout = null;
var ordered = null;
var purchase_order_confirm_form = null;
var address_info_form = null;
var pay_info_form = null;
$(document).ready(function () {
  container = $('#container');
  cart = $('#cart');
  cart_blank = $('#cart-blank');
  shopping_cart_btn = $('#shopping-cart-btn');
  step_2 = $('#step-2');
  step_3 = $('#step-3');
  step_4 = $('#step-4');
  cart.addClass('d-none');
  cart_blank.addClass('d-none');
  cart_blank.click(function (e) {
    cart.addClass('d-none');
    cart_blank.addClass('d-none');
  });
  shopping_cart_btn.click(function (e) {
    if (cart.hasClass('d-none')) {
      cart.removeClass('d-none');
      cart_blank.removeClass('d-none');
    } else {
      cart.addClass('d-none');
      cart_blank.addClass('d-none');
    }

    e.preventDefault();
  }); //end click

  readonly = $('.readonly');
  edit_mode = $('.edit-mode');

  if (location.pathname.split('/').slice(-1)[0] === 'checkout.html') {
    checkout = $('#checkout');
    ordered = $('#ordered');
    purchase_order_confirm_form = $('#purchase-order-confirm-form');
    address_info_form = $('#address-info-form');
    pay_info_form = $('#pay-info-form');
    $('#purchase-order-confirm-form button,#pay-info-form .backward-btn').click(function () {
      initForm();
      step_2.removeClass('bg-white');
      address_info_form.removeClass('d-none');
    }); //end click

    $('#address-info-form .forward-btn').click(function () {
      initForm();
      step_2.removeClass('bg-white');
      step_3.removeClass('bg-white');
      pay_info_form.removeClass('d-none');
    }); //end click

    $('#address-info-form .backward-btn').click(function () {
      initForm();
      readonly.each(function () {
        $(this).addClass('d-none');
      }); //end each

      edit_mode.each(function () {
        $(this).addClass('d-sm-flex').removeClass('d-none');
      }); //end each

      purchase_order_confirm_form.removeClass('d-none');
    }).trigger('click'); //end click

    $('#pay-info-form .forward-btn').click(function () {
      initForm();
      checkout.addClass('d-none');
      ordered.removeClass('d-none');
    }); //end click
  }

  $(window).resize(function () {
    if (container.css('width') > '575px') {
      cart.css('right', container.css('marginRight'));
    } else {
      cart.css('right', '0');
    }
  }).trigger('resize');
}); //end ready

function initForm() {
  step_2.addClass('bg-white');
  step_3.addClass('bg-white');
  step_4.addClass('bg-white');
  readonly.each(function () {
    $(this).removeClass('d-none');
  }); //end each

  edit_mode.each(function () {
    $(this).removeClass('d-sm-flex').addClass('d-none');
  }); //end each

  ordered.addClass('d-none');
  purchase_order_confirm_form.addClass('d-none');
  address_info_form.addClass('d-none');
  pay_info_form.addClass('d-none');
  $('html').scrollTop(0);
}
//# sourceMappingURL=all.js.map
