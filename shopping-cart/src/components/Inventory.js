import uniqid from "uniqid";
import cosmosRed from "./img/cosmosRed.png";
import cosmosBlack from "./img/cosmosBlack.png";
import cosmosOrange from "./img/cosmosOrange.png";
import cosmosPink from "./img/cosmosPink.png";
import cosmosWhite from "./img/cosmosWhite.png";
import cosmosYellow from "./img/cosmosYellow.png";
import hyacinthBlue from "./img/hyacinthBlue.png";
import hyacinthOrange from "./img/hyacinthOrange.png";
import hyacinthPink from "./img/hyacinthPink.png";
import hyacinthPurple from "./img/hyacinthPurple.png";
import hyacinthRed from "./img/hyacinthRed.png";
import hyacinthWhite from "./img/hyacinthWhite.png";
import hyacinthYellow from "./img/hyacinthYellow.png";
import lilyBlack from "./img/lilyBlack.png";
import lilyOrange from "./img/lilyOrange.png";
import lilyPink from "./img/lilyPink.png";
import lilyRed from "./img/lilyRed.png";
import lilyWhite from "./img/lilyWhite.png";
import lilyYellow from "./img/lilyYellow.png";
import lilyOfTheValley from "./img/Lily-of-the-Valley.png";
import mumGreen from "./img/mumGreen.png";
import mumPink from "./img/mumPink.png";
import mumPurple from "./img/mumPurple.png";
import mumRed from "./img/mumRed.png";
import mumWhite from "./img/mumWhite.png";
import mumYellow from "./img/mumYellow.png";
import pansyBlue from "./img/pansyBlue.png";
import pansyOrange from "./img/pansyOrange.png";
import pansyPurple from "./img/pansyPurple.png";
import pansyRed from "./img/pansyRed.png";
import pansyWhite from "./img/pansyWhite.png";
import pansyYellow from "./img/pansyYellow.png";
import roseRed from "./img/roseRed.png";
import roseYellow from "./img/roseYellow.png";
import roseWhite from "./img/roseWhite.png";
import rosePink from "./img/rosePink.png";
import roseOrange from "./img/roseOrange.png";
import roseBlue from "./img/roseBlue.png";
import rosePurple from "./img/rosePurple.png";
import roseBlack from "./img/roseBlack.png";
import roseGold from "./img/roseGold.png";
import tulipBlack from "./img/tulipBlack.png";
import tulipOrange from "./img/tulipOrange.png";
import tulipYellow from "./img/tulipYellow.png";
import tulipPink from "./img/tulipPink.png";
import tulipPurple from "./img/tulipPurple.png";
import tulipRed from "./img/tulipRed.png";
import tulipWhite from "./img/tulipWhite.png";
import windflowerBlue from "./img/windflowerBlue.png";
import windflowerOrange from "./img/windflowerOrange.png";
import windflowerPink from "./img/windflowerPink.png";
import windflowerPurple from "./img/windflowerPurple.png";
import windflowerRed from "./img/windflowerRed.png";
import windflowerWhite from "./img/windflowerWhite.png";

const Inventory = [
    {key: uniqid(), img: roseRed, desc: "Rose - Red", price: 40, cardCount: 0},
    {key: uniqid(), img: roseYellow, desc: "Rose - Yellow", price: 40, cardCount: 0},
    {key: uniqid(), img: roseWhite, desc: "Rose - White", price: 40, cardCount: 0},
    {key: uniqid(), img: rosePink, desc: "Rose - Pink", price: 80, cardCount: 0},
    {key: uniqid(), img: roseOrange, desc: "Rose - Orange", price: 80, cardCount: 0},
    {key: uniqid(), img: roseBlue, desc: "Rose - Blue", price: 1000, cardCount: 0},
    {key: uniqid(), img: rosePurple, desc: "Rose - Purple", price: 240, cardCount: 0},
    {key: uniqid(), img: roseBlack, desc: "Rose - Black", price: 240, cardCount: 0},
    {key: uniqid(), img: roseGold, desc: "Rose - Gold", price: 1000, cardCount: 0},
    {key: uniqid(), img: cosmosRed, desc: "Cosmos - Red", price: 40, cardCount: 0},
    {key: uniqid(), img: cosmosYellow, desc: "Cosmos - Yellow", price: 40, cardCount: 0},
    {key: uniqid(), img: cosmosWhite, desc: "Cosmos - White", price: 40, cardCount: 0},
    {key: uniqid(), img: cosmosPink, desc: "Cosmos - Pink", price: 80, cardCount: 0},
    {key: uniqid(), img: cosmosOrange, desc: "Cosmos - Orange", price: 80, cardCount: 0},
    {key: uniqid(), img: cosmosBlack, desc: "Cosmos - Black", price: 240, cardCount: 0},
    {key: uniqid(), img: tulipRed, desc: "Tulip - Red", price: 40, cardCount: 0},
    {key: uniqid(), img: tulipYellow, desc: "Tulip - Yellow", price: 40, cardCount: 0},
    {key: uniqid(), img: tulipWhite, desc: "Tulip - White", price: 40, cardCount: 0},
    {key: uniqid(), img: tulipPink, desc: "Tulip - Pink", price: 80, cardCount: 0},
    {key: uniqid(), img: tulipOrange, desc: "Tulip - Orange", price: 80, cardCount: 0},
    {key: uniqid(), img: tulipPurple, desc: "Tulip - Purple", price: 240, cardCount: 0},
    {key: uniqid(), img: tulipBlack, desc: "Tulip - Black", price: 80, cardCount: 0},
    {key: uniqid(), img: pansyRed, desc: "Pansy - Red", price: 40, cardCount: 0},
    {key: uniqid(), img: pansyYellow, desc: "Pansy - Yellow", price: 40, cardCount: 0},
    {key: uniqid(), img: pansyWhite, desc: "Pansy - White", price: 40, cardCount: 0},
    {key: uniqid(), img: pansyOrange, desc: "Pansy - Orange", price: 80, cardCount: 0},
    {key: uniqid(), img: pansyBlue, desc: "Pansy - Blue", price: 80, cardCount: 0},
    {key: uniqid(), img: pansyPurple, desc: "Pansy - Purple", price: 240, cardCount: 0},
    {key: uniqid(), img: lilyRed, desc: "Lily - Red", price: 40, cardCount: 0},
    {key: uniqid(), img: lilyYellow, desc: "Lily - Yellow", price: 40, cardCount: 0},
    {key: uniqid(), img: lilyWhite, desc: "Lily - White", price: 40, cardCount: 0},
    {key: uniqid(), img: lilyPink, desc: "Lily - Pink", price: 80, cardCount: 0},
    {key: uniqid(), img: lilyOrange, desc: "Lily - Orange", price: 80, cardCount: 0},
    {key: uniqid(), img: lilyBlack, desc: "Lily - Black", price: 80, cardCount: 0},
    {key: uniqid(), img: lilyOfTheValley, desc: "Lily-of-the-Valley", price: 1000, cardCount: 0},
    {key: uniqid(), img: hyacinthRed, desc: "Hyacinth - Red", price: 40, cardCount: 0},
    {key: uniqid(), img: hyacinthYellow, desc: "Hyacinth - Yellow", price: 40, cardCount: 0},
    {key: uniqid(), img: hyacinthWhite, desc: "Hyacinth - White", price: 40, cardCount: 0},
    {key: uniqid(), img: hyacinthPink, desc: "Hyacinth - Pink", price: 80, cardCount: 0},
    {key: uniqid(), img: hyacinthOrange, desc: "Hyacinth - Orange", price: 80, cardCount: 0},
    {key: uniqid(), img: hyacinthPurple, desc: "Hyacinth - Purple", price: 240, cardCount: 0},
    {key: uniqid(), img: hyacinthBlue, desc: "Hyacinth - Blue", price: 80, cardCount: 0},
    {key: uniqid(), img: mumRed, desc: "Mum - Red", price: 40, cardCount: 0},
    {key: uniqid(), img: mumWhite, desc: "Mum - White", price: 40, cardCount: 0},
    {key: uniqid(), img: mumYellow, desc: "Mum - Yellow", price: 40, cardCount: 0},
    {key: uniqid(), img: mumPink, desc: "Mum - Pink", price: 80, cardCount: 0},
    {key: uniqid(), img: mumPurple, desc: "Mum - Purple", price: 80, cardCount: 0},
    {key: uniqid(), img: mumGreen, desc: "Mum - Green", price: 240, cardCount: 0},
    {key: uniqid(), img: windflowerRed, desc: "Windflower- Red", price: 40, cardCount: 0},
    {key: uniqid(), img: windflowerWhite, desc: "Windflower- White", price: 40, cardCount: 0},
    {key: uniqid(), img: windflowerOrange, desc: "Windflower- Orange", price: 80, cardCount: 0},
    {key: uniqid(), img: windflowerPink, desc: "Windflower- Pink", price: 80, cardCount: 0},
    {key: uniqid(), img: windflowerPurple, desc: "Windflower- Purple", price: 240, cardCount: 0},
    {key: uniqid(), img: windflowerBlue, desc: "Windflower- Blue", price: 80, cardCount: 0},
]

export default Inventory;