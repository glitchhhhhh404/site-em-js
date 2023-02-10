<html>

  <head>

    <title>Loja Virtual</title>

  </head>

  <body>

    <h1>Bem-vindo à Loja Virtual</h1>

    <p>Aqui está a lista de produtos disponíveis:</p>

    <ul id="products">

      <!-- Lista de produtos será adicionada aqui -->

    </ul>

    <h2>Carrinho de Compras</h2>

    <p>Aqui está a lista de itens no seu carrinho:</p>

    <ul id="cart">

      <!-- Lista de itens no carrinho será adicionada aqui -->

    </ul>

    <script>

      // Lista de produtos disponíveis

      const products = [

        {

          name: "Camiseta Azul",

          price: 25.99

        },

        {

          name: "Calça Verde",

          price: 35.99

        },

        {

          name: "Tênis Branco",

          price: 120.00

        }

      ];

      // Função para adicionar produtos à lista de produtos na página

      const displayProducts = () => {

        const productsList = document.getElementById("products");

        products.forEach(product => {

          const productItem = document.createElement("li");

          productItem.innerHTML = `${product.name} - R$${product.price}`;

          const addToCartButton = document.createElement("button");

          addToCartButton.innerHTML = "Adicionar ao carrinho";

          addToCartButton.onclick = () => addToCart(product);

          productItem.appendChild(addToCartButton);

          productsList.appendChild(productItem);

        });

      };

      // Lista de itens no carrinho de compras

      let cart = [];

      // Função para adicionar itens ao carrinho

      const addToCart = product => {

        cart.push(product);

        displayCart();

      };

      // Função para exibir itens no carrinho na página

      const displayCart = () => {

        const cartList = document.getElementById("cart");

        cartList.innerHTML = "";

        let total = 0;

        cart.forEach(product => {

          const cartItem = document.createElement("li");

          cartItem.innerHTML = `${product.name} - R$${product.price}`;

          total += product.price;

          cartList.appendChild(cartItem);

        });

        cartList.innerHTML += `<li>Total: R$${total.toFixed(2)}</li>`;

      };

      // Chama a função para exibir produtos na página

      displayProducts();

    </script>

  </body>

</html>

