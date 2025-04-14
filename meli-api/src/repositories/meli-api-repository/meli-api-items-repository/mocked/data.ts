export const mockCategoryTree: Record<string, string[]> = {
  ipod: [
    "Electrónica, Audio y Video",
    "iPod",
    "Reproductores",
    "iPod Touch",
    "32GB",
  ],
  notebook: ["Tecnología", "Computación", "Laptops", "Notebooks", "Lenovo"],
  camera: [
    "Fotografía y Video",
    "Cámaras Digitales",
    "Cámaras Réflex",
    "Canon",
    "EOS",
  ],
};

export const MOCKED_ITEMS = [
  // iPod category
  {
    id: "MLA1",
    title: "iPod Touch 32GB - Space Gray",
    price: { currency: "ARS", amount: 120000, decimals: 33 },
    picture: "https://example.com/ipod1.jpg",
    condition: "Completo Único",
    free_shipping: true,
    sold_quantity: 87,
    description:
      "El iPod Touch de 7ma generación combina el diseño clásico con la potencia de un chip A10 Fusion. Ideal para música, juegos y aplicaciones. Su pantalla Retina de 4 pulgadas ofrece colores vibrantes y gran nitidez. Almacenamiento de 32GB para todas tus necesidades.",
    category: "ipod",
    location: "Córdoba",
  },
  {
    id: "MLA4",
    title: "iPod Nano 16GB - Silver",
    price: { currency: "ARS", amount: 90500, decimals: 99 },
    picture: "https://example.com/ipod2.jpg",
    condition: "Usado",
    free_shipping: false,
    sold_quantity: 120,
    description:
      "El iPod Nano es perfecto para llevar tu música favorita a cualquier lugar. Su diseño compacto y ligero lo hace ideal para deportistas. Incluye pantalla multitáctil y controles intuitivos. 16GB de capacidad para almacenar cientos de canciones.",
    category: "ipod",
    location: "Santa Fe",
  },
  {
    id: "MLA5",
    title: "iPod Classic 160GB - Black",
    price: { currency: "ARS", amount: 11990, decimals: 90 },
    picture: "https://example.com/ipod3.jpg",
    condition: "Usado",
    free_shipping: true,
    sold_quantity: 65,
    description:
      "Un clásico de Apple que nunca pasa de moda. El iPod Classic ofrece 160GB de almacenamiento para guardar miles de canciones, podcasts y videos. Su famosa rueda de clic facilita la navegación. Perfecto para coleccionistas y amantes de la música.",
    category: "ipod",
    location: "Mendoza",
  },

  // Notebook category
  {
    id: "MLA2",
    title: "Notebook Lenovo IdeaPad 3 - Ryzen 5",
    price: { currency: "ARS", amount: 250000, decimals: 0 },
    picture: "https://example.com/lenovo1.jpg",
    condition: "Nuevo",
    free_shipping: true,
    sold_quantity: 34,
    description:
      "Esta notebook Lenovo IdeaPad 3 está equipada con un procesador AMD Ryzen 5, ideal para tareas de oficina, estudio o entretenimiento. Su pantalla Full HD de 15.6'' ofrece una excelente visualización. Incluye 8GB de RAM y SSD para mayor velocidad.",
    category: "notebook",
    location: "Córdoba",
  },
  {
    id: "MLA6",
    title: "Notebook HP 250 G8 - Intel i3",
    price: { currency: "ARS", amount: 230000, decimals: 0 },
    picture: "https://example.com/hp.jpg",
    condition: "Nuevo",
    free_shipping: true,
    sold_quantity: 28,
    description:
      "La HP 250 G8 es una notebook confiable para tareas diarias. Viene con procesador Intel i3 de 11va generación y pantalla de 15.6 pulgadas. Cuenta con Windows 11 preinstalado, ideal para estudiantes o uso doméstico. Diseño moderno y liviano.",
    category: "notebook",
    location: "Capital Federal",
  },
  {
    id: "MLA7",
    title: "Notebook Dell Inspiron 15 - i7 11va Gen",
    price: { currency: "ARS", amount: 370000, decimals: 20 },
    picture: "https://example.com/dell.jpg",
    condition: "Completo Único",
    free_shipping: true,
    sold_quantity: 15,
    description:
      "La Dell Inspiron 15 ofrece alto rendimiento gracias a su procesador Intel i7 de 11va generación. Con 16GB de RAM y un disco SSD de 512GB, esta notebook es perfecta para edición, multitarea y productividad. Su pantalla antirreflejo mejora la experiencia visual.",
    category: "notebook",
    location: "Capital Federal",
  },

  // Camera category
  {
    id: "MLA3",
    title: "Cámara Réflex Canon EOS 4000D",
    price: { currency: "ARS", amount: 210000, decimals: 0 },
    picture: "https://example.com/canon1.jpg",
    condition: "Completo Único",
    free_shipping: true,
    sold_quantity: 45,
    description:
      "La Canon EOS 4000D es ideal para quienes comienzan en el mundo de la fotografía réflex. Cuenta con sensor de 18MP, grabación de video Full HD y conectividad Wi-Fi. Ligera y fácil de usar, incluye funciones automáticas para facilitar la toma de fotos.",
    category: "camera",
    location: "Capital Federal",
  },
  {
    id: "MLA8",
    title: "Cámara Sony Alpha a6000 Mirrorless",
    price: { currency: "ARS", amount: 320000, decimals: 30 },
    picture: "https://example.com/sony.jpg",
    condition: "Nuevo",
    free_shipping: true,
    sold_quantity: 20,
    description:
      "La Sony Alpha a6000 es una cámara mirrorless compacta con enfoque automático ultrarrápido. Ideal para capturar momentos espontáneos, ofrece calidad profesional con 24.3MP y grabación Full HD. Su visor electrónico y controles manuales completan la experiencia.",
    category: "camera",
    location: "Santa Fe",
  },
  {
    id: "MLA9",
    title: "Cámara Nikon D3500 Kit 18-55mm",
    price: { currency: "ARS", amount: 295199, decimals: 99 },
    picture: "https://example.com/nikon.jpg",
    condition: "Usado",
    free_shipping: false,
    sold_quantity: 31,
    description:
      "La Nikon D3500 es una réflex ideal para principiantes. Este kit incluye lente 18-55mm, modo guía y conectividad Bluetooth. Su sensor de 24.2MP y capacidad de grabar video en Full HD la convierten en una excelente opción para aprender fotografía.",
    category: "camera",
    location: "Capital Federal",
  },
  {
    id: "MLA10",
    title: "Canon EOS Rebel T7 - Full HD",
    price: { currency: "ARS", amount: 275000, decimals: 50 },
    picture: "https://example.com/canon2.jpg",
    condition: "Nuevo",
    free_shipping: true,
    sold_quantity: 18,
    description:
      "La Rebel T7 combina rendimiento y simplicidad. Su sensor de 24.1MP permite capturar imágenes nítidas y vívidas, mientras que su grabación en Full HD es perfecta para video. Ideal para quienes desean subir de nivel en fotografía sin complicaciones.",
    category: "camera",
    location: "Santa Fe",
  },
];
