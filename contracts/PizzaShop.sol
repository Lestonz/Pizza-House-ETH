// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// create by LESTONZ
import "hardhat/console.sol";
contract PizzaShop {
  string public name = "Lestonz's Pizza House";
  uint public pizzaCount = 3;
  mapping(uint => Pizza ) public pizzas;

  uint public dessertCount = 3;
  mapping(uint => Dessert ) public desserts;

  uint public drinkCount = 3;
  mapping(uint => Drink ) public drinks;

  struct Pizza {
    uint id ;
    string hash;
    string description;
    uint priceAmount ;
    address payable author ;
  }

  struct Dessert {
    uint id ;
    string hash;
    string description;
    uint priceAmount ;
    address payable author ;
  }

  struct Drink {
    uint id ;
    string hash;
    string description;
    uint priceAmount ;
    address payable author ;
  }

  event PizzaPaid(
    uint id,
    string hash,
    string description,
    uint priceAmount,
    address payable author
  );

  event DessertPaid(
    uint id,
    string hash,
    string description,
    uint priceAmount,
    address payable author
  );

  event DrinkPaid(
    uint id,
    string hash,
    string description,
    uint priceAmount,
    address payable author
  );


  function payPizzaOwner(uint _id) public payable {
      
    require(_id > 0 && _id <= pizzaCount);
  
    Pizza memory _pizza = pizzas[_id];
   
    address payable _author = _pizza.author;
   
    payable(_author).transfer(msg.value);
    _pizza.priceAmount = _pizza.priceAmount + msg.value;
    
    pizzas[_id] = _pizza;
    
    emit PizzaPaid(_id, _pizza.hash, _pizza.description, _pizza.priceAmount, _author);
  }

  function payDessertOwner(uint _id) public payable {
      
    require(_id > 0 && _id <= dessertCount);
  
    Dessert memory _dessert = desserts[_id];
   
    address payable _author = _dessert.author;
   
    payable(_author).transfer(msg.value);
    _dessert.priceAmount = _dessert.priceAmount + msg.value;
    
    desserts[_id] = _dessert;
    
    emit DessertPaid(_id, _dessert.hash, _dessert.description, _dessert.priceAmount, _author);
  }

  function payDrinkOwner(uint _id) public payable {
      
    require(_id > 0 && _id <= drinkCount);
  
    Drink memory _drink = drinks[_id];
   
    address payable _author = _drink.author;
   
    payable(_author).transfer(msg.value);
    _drink.priceAmount = _drink.priceAmount + msg.value;
    
    drinks[_id] = _drink;
    
    emit DrinkPaid(_id, _drink.hash, _drink.description, _drink.priceAmount, _author);
  }
}