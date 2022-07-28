const PRODUCTS = [
    {
        id: 1,
        name: "Training Foot Homme",
        price: 299,
        marque: "NIKE",
        image: require("../assets/product_images/foot3.jpg"),
        description:
          "Dédiée à tous ceux qui apprécient autant la victoire que la bataille à mener tout au long de la compétition pour la décrocher, la ligne teamLIGA muscle son jeu en vous proposant une collection à la coupe redessinée qui fait la part belle à la performance et au confort pendant l'effort. Que ce soit pour disputer le match de votre carrière ou pour encourager votre équipe depuis la ligne de touche, ce maillot épuré vous garde bien au frais et à l'aise grâce à la technologie d'évacuation de l'humidité dryCELL de NIKE et à ses détails en mesh",
    },
    {
        id: 2,
        name: "AHaut Training Foot Homme Puma Om",
        price: 230,
        marque: "PUMA",
        image: require("../assets/product_images/foot4.jpg"),
        description:
        "Dédiée à tous ceux qui apprécient autant la victoire que la bataille à mener tout au long de la compétition pour la décrocher, la ligne teamLIGA muscle son jeu en vous proposant une collection à la coupe redessinée qui fait la part belle à la performance et au confort pendant l'effort. Que ce soit pour disputer le match de votre carrière ou pour encourager votre équipe depuis la ligne de touche, ce maillot épuré vous garde bien au frais et à l'aise grâce à la technologie d'évacuation de l'humidité dryCELL de PUMA et à ses détails en mesh",
    },
    {
        id: 3,
        name: "AHaut Training Foot Homme",
        price: 199,
        marque: "NIKE",
        image: require("../assets/product_images/foot5.jpg"),
        description:
          "Dédiée à tous ceux qui apprécient autant la victoire que la bataille à mener tout au long de la compétition pour la décrocher, la ligne teamLIGA muscle son jeu en vous proposant une collection à la coupe redessinée qui fait la part belle à la performance et au confort pendant l'effort. Que ce soit pour disputer le match de votre carrière ou pour encourager votre équipe depuis la ligne de touche, ce maillot épuré vous garde bien au frais et à l'aise grâce à la technologie d'évacuation de l'humidité dryCELL de NIKE et à ses détails en mesh",
    },
    {
        id: 4,
        name: "Haut Training Foot Homme Puma ",
        price: 349,
        marque: "PUMA",
        image: require("../assets/product_images/foot6.jpg"),
        description:
          "Dédiée à tous ceux qui apprécient autant la victoire que la bataille à mener tout au long de la compétition pour la décrocher, la ligne teamLIGA muscle son jeu en vous proposant une collection à la coupe redessinée qui fait la part belle à la performance et au confort pendant l'effort. Que ce soit pour disputer le match de votre carrière ou pour encourager votre équipe depuis la ligne de touche, ce maillot épuré vous garde bien au frais et à l'aise grâce à la technologie d'évacuation de l'humidité dryCELL de PUMA et à ses détails en mesh",
    },
    {
        id: 5,
        name: "Training Foot Homme Adidas",
        price: 199,
        marque: "Adidas",
        image: require("../assets/product_images/foot7.jpg"),
        description:
          "Dédiée à tous ceux qui apprécient autant la victoire que la bataille à mener tout au long de la compétition pour la décrocher, la ligne teamLIGA muscle son jeu en vous proposant une collection à la coupe redessinée qui fait la part belle à la performance et au confort pendant l'effort. Que ce soit pour disputer le match de votre carrière ou pour encourager votre équipe depuis la ligne de touche, ce maillot épuré vous garde bien au frais et à l'aise grâce à la technologie d'évacuation de l'humidité dryCELL de Adidas et à ses détails en mesh",
    },
    
]

export function getProducts(){
    return PRODUCTS;
}

export function getProduct(id){
    return PRODUCTS.find((product) => product.id == id);
}