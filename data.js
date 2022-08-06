const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Dc-comics");

const HeroModel = require("./model/characters");
HeroModel.insertMany([
  {
    slug: "batman",
    name: "Batman",
    fullName: "Bruce Wayne",
    description:
      "Au nom de ses parents assassinés, Bruce Wayne mène une guerre éternelle contre les criminels de Gotham City. Il est vengeur. Il est la nuit. Il est Batman .L'un des personnages de fiction les plus emblématiques au monde, Batman a consacré sa vie à une croisade sans fin, une guerre contre tous les criminels au nom de ses parents assassinés, qui lui ont été enlevés alors qu'il n'était qu'un enfant. Depuis cette nuit tragique, il a entraîné son corps et son esprit à une perfection physique proche pour devenir un super-héros autodidacte. Il a développé un arsenal technologique qui ferait honte à la plupart des armées. Et il a réuni des équipes de ses collègues DC Super Heroes, comme la Justice League, les Outsiders et Batman, Incorporated. Playboy milliardaire de jour, la double vie de Bruce Wayne lui offre le confort d'une vie sans souci financier, un majordome fidèle devenu gardien et la base d'opérations idéale dans l'ancien réseau de grottes sous le vaste domaine de sa famille. La nuit, cependant, il abandonne toute prétention, enfile sa cape festonnée emblématique et son capuchon pointu et se rend dans les rues, le ciel et les toits ombragés de Gotham City.",
    intro: "Ses parents sont morts quand il était si jeune. Tué juste devant lui. Il a été élevé seul. Un enfant dans un immense manoir . Avec ses souvenirs de sa mère et de son père . Il avait de l'amour, et ils le lui ont pris. Il devrait être un tueur. Il devrait vouloir déchirer le monde pour ce qu'il a fait. Et pourtant, il a pris cette douleur. Ce choc de la mort. Et il l'a transformé en espoir.  - SUPERMAN au sujet de Batman",
    power: [
      "artiste martial, ",
      "exceptionnel, ",
      "stratégie de combat, ",
      "richesse inépuisable, ",
      "talent déductif brillant, ",
      "technologie de pointe",
    ],
    color: "black",
    image:
      "https://th.bing.com/th/id/R.f8716846602487f293cb5d0f38062a48?rik=fa0bh77R1Zd0gQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2f8zWl891.jpg&ehk=0VIhyb600CC4z49Aj41kdz7txJ8uig3hkFi1ZqYO%2fHo%3d&risl=&pid=ImgRaw&r=0",
    poster_path:
      "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg",
      poster_power : "https://img4.goodfon.com/original/1920x1080/2/51/superhero-dark-knight-cape-villain-prestupniki-pugalo-superg.jpg"
    },
  {
    slug: "superman",
    name: "Superman",
    fullName: "Clark Kent",
    description:
      "Plus rapide qu'un obus, plus puissant qu'une locomotive... L'Homme d'acier mène une bataille sans fin pour la vérité, la justice et la voie américaine.De son uniforme bleu à sa cape rouge fluide en passant par le bouclier S sur sa poitrine, Superman est l'un des super-héros DC les plus reconnaissables et les plus aimés de tous les temps. L'homme d'acier est le symbole ultime de la vérité, de la justice et de l'espoir. Il est le premier super-héros au monde et un guide pour tous. La pointe de la lance dans une révolution qui allait changer le paysage de la culture pop, Superman a passé les quatre-vingts dernières années à redéfinir ce que signifie défendre la vérité, la justice et la voie américaine. Dernier survivant de la planète condamnée Krypton, élevé au cœur de Smallville, au Kansas, Superman est autant une légende qu'un homme : l'étalon-or de l'héroïsme, de la compassion et de la responsabilité.Bien que ses pouvoirs le rendent divin aux côtés de ses compatriotes humains, l'histoire de Superman n'est pas celle de la cupidité ou de la conquête. Au lieu de cela, il s'efforce de représenter la bonté inhérente à l'esprit humain et la capacité de chaque être vivant à faire le bien de ses voisins.",
    intro: "Toute sa planète a été détruite. Il est le dernier d'un holocauste . Il a grandi dans la boue. Découvrir lentement à quel point il était différent. Un étranger découvrant chaque jour à quel point il était étrange. Il a le pouvoir de déchirer le monde. Et il pourrait. Avec un petit doigt. Ce n'est pas son monde. Nous ne sommes pas son peuple. Nous devrions être des fourmis pour lui. Imagine ça. Être toujours à l'extérieur. La douleur qui viendrait d'être toujours à l'extérieur. Et pourtant, il a pris cette douleur et est devenu le symbole de l'espoir - BATMAN en parlant de SUPERMAN",
    power: [
      "super force, ",
      "vol, ",
      "invulnérabilité, ",
      "super vitesse, ",
      "vision thermique, ",
      "haleine gelée, ",
      "vision aux rayons X, ",
      "audition surhumaine, ",
      "facteur de guérison, ",
    ],
    color: "blue",
    image: "https://wallpapercave.com/wp/M0BdpjB.jpg",
    poster_path:
      "https://th.bing.com/th/id/R.f52de25edf75423e4ca89464b8fcc071?rik=svSrKkwTsHX7sg&riu=http%3a%2f%2fimg2.wikia.nocookie.net%2f__cb20130401102400%2fmarvel_dc%2fimages%2f2%2f21%2fSuperman_Prime_Earth_0017.jpg&ehk=MzWUoO7awc3jXnQ5c8Ff7X88hXDDfDmziCo7rtfh%2bu4%3d&risl=&pid=ImgRaw&r=0",
    poster_power : "https://images8.alphacoders.com/567/567780.jpg"

    },
  {
    slug: "wonder woman",
    name: "Wonder Woman",
    fullName: "Diana Prince",
    description:
      "L'un des super-héros DC les plus aimés et les plus emblématiques de tous les temps, Wonder Woman est depuis près de quatre-vingts ans un symbole de vérité, de justice et d'égalité pour les gens du monde entier. Élevée sur l'île cachée de Themyscira, également connue sous le nom de Paradise Island, Diana est une Amazone, comme les figures de la légende grecque, et le cadeau de son peuple à l'humanité.En tant qu'émissaire de Themyscira dans le monde des hommes, Diana s'est fait un devoir de montrer l'exemple, même si les différences entre son lieu de naissance et sa nouvelle maison lui empêchent parfois de sauter. Elle en est venue à représenter la possibilité et le potentiel d'une vie sans guerre, haine ou violence, et elle est une lueur d'espoir pour tous ceux qui se trouvent dans le besoin. Elle se tient sur un pied d'égalité parmi les super-héros les plus puissants, avec pour objectif de protéger le monde de l'injustice sous toutes ses formes. Le travail de Diana, cependant, est tout sauf facile. Constamment déchirée entre sa mission de promouvoir la paix et son besoin de lutter contre la violence omniprésente de sa nouvelle maison, Diana a du mal à faire la distinction entre sa force guerrière et sa compassion sans fin chaque jour.",
    intro:
      "Je suis forte, puissante et Belle comme Aphrodite, sage comme Athéna, plus rapide qu'Hermès et plus forte qu'Hercule, la princesse Diana de Themyscira se bat pour la paix dans le monde des hommes.",
    power: [
      "super force, ",
      "invulnérabilité, ",
      "vol, ",
      "compétence de combat, ",
      "stratégie de combat, ",
      "agilité surhumaine, ",
      "facteur de guérison, ",
      "armes magiques, ",
    ],
    color: "yellow",
    image:
      "https://i.pinimg.com/originals/78/4c/0f/784c0f02756226e7531ec0fb278c0790.jpg",
    poster_path:"https://th.bing.com/th/id/R.fa252b9c9a642c5dabeb25b9516af75a?rik=NLfcW9EzGM2p0g&riu=http%3a%2f%2fthegaminggang.com%2fwp-content%2fuploads%2f2017%2f02%2fWonderWoman16-650x986.jpg&ehk=sgt%2fgRN3LZdzB93bGNA21B8AAy2Lb%2blcwfBS9xIeAHU%3d&risl=&pid=ImgRaw&r=0",
    poster_power : "https://wallpapercave.com/wp/wp7325657.jpg"

  },
]);
