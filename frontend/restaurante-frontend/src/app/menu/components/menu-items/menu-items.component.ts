import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalItemsComponent } from '../modal-items/modal-items.component';

interface MenuItem {
  nombre: string;
  precio: number;
  alergenos: string[];
  imagen: string;
}

interface Categoria {
  categoria: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css'],
  imports: [CommonModule, ModalItemsComponent]
})
export class MenuItemsComponent {
  menu: Categoria[] = [
    {
      "categoria": "Platos Principales",
      "items": [
        {
          "nombre": "Guacamole casero con totopos",
          "precio": 9.80,
          "alergenos": ["Ninguno"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2023/06/Guacamole-casero-con-totopos.webp"
        },
        {
          "nombre": "Enchilada de cochinita pibil con salsa baja-med",
          "precio": 11.30,
          "alergenos": ["Gluten y Lácteos"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2023/12/Enchilada-de-cochinita-pibil-con-salsa-baja-med.webp"
        },
        {
          "nombre": "Chilaquiles rojos con salsa molcajeteada de chiles güeros y huevo frito",
          "precio": 11,
          "alergenos": ["Gluten, Huevos y Lácteos"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2023/06/Chilaquiles-rojos-con-salsa-molcajeteada-de-chiles-gueros-y-huevo-frito.webp"
        },
        {
          "nombre": "Quesadilla de pastrami y queso raclette en pan árabe tostado con salsa tártara de jalapeño.",
          "precio": 11,
          "alergenos": ["Gluten, Huevos y Lácteos"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2024/10/Quesadilla-de-pastrami-y-queso-raclette-en-pan-arabe-tostado-con-salsa-tartara-de-jalapeno.webp"
        },
        {
          "nombre": "Quesadilla de rabo de Toro guisado con tres chiles, queso Gamoneu y salsa molcajeteada de chiles Güeros",
          "precio": 11.10,
          "alergenos": ["Gluten, Apio y Lácteos"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2023/06/Quesadilla-de-rabo-de-Toro-guisado-con-tres-chiles-queso-Gamoneu-y-salsa-molcajeteada-de-chiles-Gueros.webp"
        },
        {
          "nombre": "Taco de mollejas de Ternera salteadas con mojo de ajo y chile de arbol",
          "precio": 11.50,
          "alergenos": ["Gluten"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2024/07/Taco-de-mollejas-de-Ternera-salteadas-con-mojo-de-ajo-y-chile-de-arbol.webp"
        },
        {
          "nombre": "Tacos de brisket de wagyu con crema de elote y tajín de dos chiles",
          "precio": 12.40,
          "alergenos": ["Lácteos y Mostaza"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2023/06/Tacos-de-brisket-de-wagyu-con-crema-de-elote-y-tajin-de-dos-chiles.webp"
        },
        {
          "nombre": "Tacos de Presa ibérica con sobrasada, salsa borracha y queso Cotija mexicano",
          "precio": 12.80,
          "alergenos": ["Gluten, Dióxido de azufre y sulfitos y Lácteos"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2023/06/Tacos-de-Presa-iberica-con-sobrasada-salsa-borracha-y-queso-Cotija-mexicano.webp"
        },
        {
          "nombre": "Tacos al pastor con cebolleta, piña y cilantro",
          "precio": 9.70,
          "alergenos": ["Dióxido de azufre y sulfitos"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2023/06/Tacos-al-pastor-con-cebolleta-pina-y-cilantro.webp"
        },
        {
          "nombre": "Taco de cochinillo confitado con salsa de chiles serranos tatemados",
          "precio": 10.10,
          "alergenos": ["Huevo"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2023/07/Taco-de-cochinillo-confitado-con-salsa-de-chiles-serranos-tatemados.webp"
        },
        {
          "nombre": "Ceviche amarillo de corvina y camarón con salsa macha",
          "precio": 13.50,
          "alergenos": ["Crustáceos, Pescado y Moluscos"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2023/06/Ceviche-amarillo-de-corvina-y-camaron-con-salsa-macha.webp"
        },
        {
          "nombre": "Tostada de Atún michelado con Aguacate",
          "precio": 10.70,
          "alergenos": ["Gluten, Crustáceos, Pescado, Soja"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2023/06/Tostada-de-Atun-michelado-con-Aguacate.webp"
        },
        {
          "nombre": "Brioche de carne apache con solomillo y chiles ahumados",
          "precio": 12,
          "alergenos": ["Glúten, Huevos, Pescado, Soja, Lácteos, Frutos de Cáscara, Mostaza"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2023/06/Brioche-de-carne-apache-con-solomillo-y-chiles-ahumados.webp"
        },
        {
          "nombre": "Taco de chopitos crujientes bañados en salsa de mejillones en escabeche",
          "precio": 13.50,
          "alergenos": ["Glúten, Crustáceos, Huevos, Pescado, Soja y Moluscos"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2023/06/Taco-de-chopitos-crujientes-banados-en-salsa-de-mejillones-en-escabeche.webp"
        },
        {
          "nombre": "Tacos campechanos de bife con queso Reblochon y huevo de codorniz",
          "precio": 11.50,
          "alergenos": ["Gluten, Huevos y Lácteos"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2023/07/Tacos-campechanos-de-bife-con-queso-Reblochon-y-huevo-de-codorniz.webp"
        },
        {
          "nombre": "Taco de carnitas de pato con mole rojo manchamanteles",
          "precio": 11.90,
          "alergenos": ["Cacahuetes, Lácteos, Frutos de cáscara y Granos de sésamo"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2023/06/Taco-de-carnitas-de-pato-con-mole-rojo-manchamanteles.webp"
        },
        {
          "nombre": "Tacos árabes de pollo de corral con adobo de chile pasilla y crema mexicana",
          "precio": 12.70,
          "alergenos": ["Glúten, Soja, Lácteos"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2023/06/Tacos-arabes-de-pollo-de-corral-con-adobo-de-chile-pasilla-y-crema-mexicana.webp"
        },
        {
          "nombre": "Tacos de oreja y sepia con salsa de chile habanero",
          "precio": 9.10,
          "alergenos": ["Granos de sésamos y Moluscos"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2023/06/Tacos-de-oreja-y-sepia-con-salsa-de-chile-habanero.webp"
        },
        {
          "nombre": "El Gober de Mawey: Taco de langostinos salteados con queso oaxaca, polvo de kikos y salsa de chile ancho",
          "precio": 10.60,
          "alergenos": ["Crustáceos, Huevos, Lácteos, Mostaza y Dióxido de azufre y sulfitos"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2023/06/El-Gober%C2%AE-de-Mawey-Taco-de-langostinos-salteados-con-queso-oaxaca-polvo-de-kikos-y-salsa-de-chile-ancho.webp"
        },
        {
          "nombre": "Costilla de ternera glaseada con barbacoa de chile morita y pico de gallo",
          "precio": 25,
          "alergenos": ["Glúten"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2023/06/Costilla-de-ternera-glaseada-con-barbacoa-de-chile-morita-y-pico-de-gallo.webp"
        }
      ]
    },
    {
      "categoria": "Postres",
      "items": [
        {
          "nombre": "Pastel de tres leches de chocolate blanco",
          "precio": 7,
          "alergenos": ["Glúten, Huevos, Soja y Lácteos"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2023/06/Pastel-de-tres-leches-de-chocolate-blanco.webp"
        },
        {
          "nombre": "Brownie cremoso de chocolate mexicano con crema de vainilla de Veracruz y barquillo crujiente",
          "precio": 7,
          "alergenos": ["Glúten, Huevos, Soja y Lácteos"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2023/06/Brownie-cremoso-de-chocolate-mexicano-con-crema-de-vainilla-de-Veracruz-y-barquillo-crujiente.webp"
        },
        {
          "nombre": "Tarta de lima-maracuya con polvo de frambuesa",
          "precio": 7,
          "alergenos": ["Huevos y Lácteos"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2023/06/Tarta-de-lima-maracuya-con-polvo-de-frambuesa.webp"
        },
        {
          "nombre": "Tarta cremosa de mascarpone con toffee de flor de jamaica",
          "precio": 7,
          "alergenos": ["Glúten, Lácteos y Frutos de cáscara"],
          "imagen": "https://restaurantemawey.com/wp-content/uploads/2023/06/Tarta-cremosa-de-mascarpone-con-toffee-de-flor-de-jamaica.webp"
        },
      ]
    },
    {
      "categoria": "Bebidas Especiales",
      "items": [
        {
          "nombre": "Margarita",
          "precio": 7.60,
          "alergenos": ["Ninguno"],
          "imagen": "https://recetasdecocina.elmundo.es/wp-content/uploads/2022/05/como-preparar-una-margarita.jpg"
        },
        {
          "nombre": "Noche de los Muertos",
          "precio": 11.50,
          "alergenos": ["Ninguno"],
          "imagen": "https://www.revistagranhotel.com/wp-content/uploads/2022/10/jalisco-mule-ginkgo.jpg"
        },
        {
          "nombre": "Chelada",
          "precio": 5.60,
          "alergenos": ["Ninguno"],
          "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYeJ_wObRb0ShjZZoOXVrM1qfSWx5CgMnsvw&s"
        },
        {
          "nombre": "Agua flor de Jamaica",
          "precio": 3.50,
          "alergenos": ["Ninguno"],
          "imagen": "https://www.clarin.com/2024/04/16/qtpgHjU5c_2000x1500__1.jpg"
        }
      ]
    }
  ];

  categorias = ["Todos", "Platos Principales", "Postres", "Bebidas Especiales"];
  categoriaSeleccionada: string = "Todos";
  menuFiltrado: Categoria[] = this.menu;

  selectedItem: MenuItem = { nombre: "", precio: 0, alergenos: [], imagen: "" };
  isModalOpen = false;

  constructor() { }

  filtrarMenu(categoria: string) {
    this.categoriaSeleccionada = categoria;
    this.menuFiltrado = categoria === "Todos" ? this.menu : this.menu.filter(cat => cat.categoria === categoria);
  }

  openModal(item: MenuItem) {
    this.selectedItem = item;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}