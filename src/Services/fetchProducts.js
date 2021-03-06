import FirstMovie from "../Assets/Images/1st-movie.jpg";
import SecondMovie from "../Assets/Images/second-movie.jpg";
import ThirdMovie from "../Assets/Images/third-movie.jpg";
import FourthMovie from "../Assets/Images/fourth-movie.jpg";

export const fetchProducts = () => {
    return [{
        id: "1",
        imageUrl: FirstMovie,
        title: "Гриффины",
        description: "31 января 1999",
        details: "Типичная американская семья, члены которой способны разбить все возможные стереотипы. А говорящая собака с сигаретой и сухим мартини… А грудной малыш, мечтающий поработить весь мир… Разве это отклонение? Это катарсис в каждом эпизоде!",
    }, {
        id: "2",
        imageUrl: SecondMovie,
        title: "Симпсоны",
        description: "16 декабря 1989",
        details: "Мультфильм — пародия на американский уклад жизни. Cемейство Симпсонов состоит из пяти членов: папаша Гомер, мать семейства Мардж, их дочери Лиза и Мэгги и несносный подросток Барт.",
    }, {
        id: "3",
        imageUrl: ThirdMovie,
        title: "Мандалорец",
        description: "12 ноября 2019",
        details: "Угрюмый воин-мандалорец, никогда не снимающий шлем, работает наёмником и почти все сбережения отдаёт своим сородичам, которые, некогда будучи великой расой, теперь скрываются под землёй и тихо восстанавливают былую славу. На одном из особо дорогих заданий грозный бывший имперец поручает Мандалорцу доставить живым или мёртвым некое существо. Им оказывается маленький милый ребёнок, и герой — понимая, что ничего хорошего с этим ребёнком делать клиент не собирается, — начинает нелёгкую борьбу с собственной совестью.",
    }, {
        id: "4",
        imageUrl: FourthMovie,
        title: "Это мы",
        description: "20 сентября 2016",
        details: "18 миллионов ныне живущих в мире людей одновременно отмечают собственный день рождения. Но одинаковая праздничная дата — не единственное обстоятельство, объединяющее их при всей своей непохожести...",
    }]
}