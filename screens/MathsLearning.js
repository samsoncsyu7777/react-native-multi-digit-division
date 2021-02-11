import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import theme from "../Theme";
import {
  withTheme,
} from 'react-native-paper';
import {
  HeadingSelect,
} from "../components/MathsLearningComponents";
import {
  LongDivision,
} from "./LongDivision";
import pic1 from "../assets/createWater1.jpg";
import pic2 from "../assets/fiveBreadTwoFish2.jpg";
import pic3 from "../assets/prodigal1.jpg";
import prayerImage from "../assets/prayer6.jpg";
import constants from "../Constants";

const breakpoint = constants.breakpoint;

function MathsLearning(props) {
  const [languageIndex, setLanguageIndex] = useState(2);//0:繁體中文
  const [bibleVersionIndex, setBibleVersionIndex] = useState(0);//0:catholic,1:christian
  const [topicIndex, setTopicIndex] = useState(2);
  const [learningToolIndex, setLearningToolIndex] = useState(1);
  const [scriptureVerseIndex, setScriptureVerseIndex] = useState(0);

  const numberOfBibleVersions = 2;
  const numberOfTopics = 4;
  const numberOfLearningTools = 3;
  const numberOfScriptureVerses = 3;
  const scriptureImages = [pic1, pic2, pic3];
  const languages = ["繁體中文", "简体中文", "English", "Française"];
  const bibleVersions = ["天主教", "基督教", "天主教", "基督教", "Catholic", "Christian", "Catholique", "Chrétienne"];
  const bibleVersionsQuestion = ["經文版本", "经文版本", "Scripture version", "Version biblique"];
  const topics = [
    "兩位數", "三位數", "四位數", "五位數",
    "两位数", "三位数", "四位数", "五位数",
    "Two digits", "Three digits", "Four digits", "Five digits",
    "Deux chiffres", "Trois chiffres", "Quatre chiffres", "Cinq chiffres"
  ];
  const topicsQuestion = ["被除數", "被除数", "Dividend", "Dividende"];
  const learningTools = [
    "一位數", "兩位數", "三位數", "一位數", "兩位數", "三位數", "一位數", "兩位數", "三位數", "一位數", "兩位數", "三位數",
    "一位数", "两位数", "三位数", "一位数", "两位数", "三位数", "一位数", "两位数", "三位数", "一位数", "两位数", "三位数",
    "One digit", "Two digits", "Three digits", "One digit", "Two digits", "Three digits", "One digit", "Two digits", "Three digits", "One digit", "Two digits", "Three digits",
    "Un chiffre", "Deux chiffres", "Trois chiffres", "Un chiffre", "Deux chiffres", "Trois chiffres", "Un chiffre", "Deux chiffres", "Trois chiffres", "Un chiffre", "Deux chiffres", "Trois chiffres"];
  const learningToolsQuestion = [
    "除數", "除数", "Divisor", "Diviseur"
  ];
  const scriptureVerses = [//Gen 1:6-7, Matthew14:17-19, Luke15:11-12
    //traditional chinese
    "天主說：「在水與水之間要有穹蒼，將水分開！」事就這樣成了。天主造了穹蒼，分開了穹蒼以下的水和穹蒼以上的水。創1:6-7",
    "門徒對他說：「我們這裡什麼也沒有，只有五個餅和兩條魚。」耶穌說：「你們給我拿到這裡來！」遂又吩咐群眾坐在草地上，然後拿起那五個餅和兩條魚，望天祝福了；把餅擘開，遞給門徒，門徒再分給群眾。瑪14:17-19",
    "耶穌又說：「一個人有兩個兒子，那小的向父親說：父親，請把我應得的一分家產給我罷！父親遂把產業給他們分開了。」路15:11-12",
    "神說：「眾水之間要有穹蒼，把水和水分開。」神就造了穹蒼，把穹蒼以下的水和穹蒼以上的水分開。事就這樣成了。創1:6-7",
    "門徒說：「我們這裏只有五個餅、兩條魚。」耶穌說：「拿過來給我。」於是他吩咐眾人坐在草地上，就拿著這五個餅和兩條魚，望著天祝福，擘開餅，遞給門徒，門徒又遞給眾人。太14:17-19",
    "耶穌又說：「一個人有兩個兒子。小兒子對父親說：『父親，請你把我應得的家業分給我。』他父親就把財產分給他們。」路15:11-12",
    //simplified chinese
    "天主说：「在水与水之间要有穹苍，将水分开！」事就这样成了。天主造了穹苍，分开了穹苍以下的水和穹苍以上的水。创1:6-7",
    "门徒对他说：「我们这里什么也没有，只有五个饼和两条鱼。」耶稣说：「你们给我拿到这里来！」遂又吩咐群众坐在草地上，然后拿起那五个饼和两条鱼，望天祝福了；把饼擘开，递给门徒，门徒再分给群众。玛14:17-19",
    "耶稣又说：「一个人有两个儿子，那小的向父亲说：父亲，请把我应得的一分家产给我罢！父亲遂把产业给他们分开了。」路15:11-12 ",
    "神说：「众水之间要有穹苍，把水和水分开。」神就造了穹苍，把穹苍以下的水和穹苍以上的水分开。事就这样成了。创1:6-7",
    "门徒说：「我们这里只有五个饼、两条鱼。」耶稣说：「拿过来给我。」于是他吩咐众人坐在草地上，就拿着这五个饼和两条鱼，望着天祝福，擘开饼，递给门徒，门徒又递给众人。太14:17-19",
    "耶稣又说：「一个人有两个儿子。小儿子对父亲说：『父亲，请你把我应得的家业分给我。』他父亲就把财产分给他们。」路15:11-12 ",
    //english
    "God said, 'Let there be a vault through the middle of the waters to divide the waters in two.' And so it was. God made the vault, and it divided the waters under the vault from the waters above the vault.Genesis1:6-7",
    "But they answered, 'All we have with us is five loaves and two fish.' So he said, 'Bring them here to me.' He gave orders that the people were to sit down on the grass; then he took the five loaves and the two fish, raised his eyes to heaven and said the blessing. And breaking the loaves he handed them to his disciples, who gave them to the crowds.Matthew14:17-19",
    "Then he said, 'There was a man who had two sons. The younger one said to his father, 'Father, let me have the share of the estate that will come to me.' So the father divided the property between them.'Luke15:11-12",
    "And God said, Let there be a solid arch stretching over the waters, parting the waters from the waters. And God made the arch for a division between the waters which were under the arch and those which were over it: and it was so.Genesis1:6-7",
    "And they say to him, We have here but five cakes of bread and two fishes. And he said, Give them to me. And he gave orders for the people to be seated on the grass; and he took the five cakes of bread and the two fishes and, looking up to heaven, he said words of blessing, and made division of the food, and gave it to the disciples, and the disciples gave it to the people.Matthew14:17-19",
    "And he said, A certain man had two sons: And the younger of them said to his father, Father, give me that part of your property which will be mine. And he made division of his goods between them.Luke15:11-12",
    //french
    "Dieu dit: ' Qu'il y ait un firmament entre les eaux, et qu'il sépare les eaux d'avec les eaux. ' Et Dieu fit le firmament, et il sépara les eaux qui sont au-dessous du firmament d'avec les eaux qui sont au-dessus du firmament. Et cela fut ainsi.Genèse1:6-7",
    "Ils lui dirent: ' Nous n'avons ici que cinq pains et deux poissons. ' 	' Apportes-les-moi, ici, ' dit-il. Après avoir fait asseoir les foules sur l'herbe, il prit les cinq pains et les deux poissons, leva les yeux au ciel, prononça la bénédiction, rompit les pains et les donna aux disciples, et les disciples les donnèrent aux foules.Matthieu14:17-19",
    "Il dit encore: ' Un homme avait deux fils. Le plus jeune dit à son père: ' Mon père, donne-moi la part de biens qui doit me revenir. ' Et il leur partagea son avoir. 'Luc15:11-12",
    "Dieu dit : « Qu'il y ait une étendue entre les eaux pour les séparer les unes des autres ! » Dieu fit l'étendue et sépara ainsi l’eau qui est au-dessous de l'étendue de celle qui est au-dessus. Cela se passa ainsi.Genèse1:6-7",
    "Mais ils lui dirent : « Nous n'avons ici que cinq pains et deux poissons. » « Apportez-les-moi ici », leur dit Jésus. Il fit asseoir la foule sur l'herbe, prit les cinq pains et les deux poissons, leva les yeux vers le ciel et prononça la prière de bénédiction. Puis il rompit les pains et les donna aux disciples, qui les distribuèrent à la foule.Matthieu14:17-19",
    "Il dit encore : « Un homme avait deux fils. Le plus jeune dit à son père : ‘Mon père, donne-moi la part de l’héritage qui doit me revenir.’Le père leur partagea alors ses biens.Luc15:11-12"
  ];
  const prayers = [
    "主耶穌，感謝祢賜給我獨特的恩典，這恩典在一生中引導我走向天父的光明，並懷抱愛去幫助有困難的人！",
    "主耶稣，感谢祢赐给我独特的恩典，这恩典在一生中引导我走向天父的光明，并怀抱爱去帮助有困难的人！",
    "Lord Jesus, thank you for giving me the unique grace that guides me to the light of the Father in my life, and embraces love to help people in difficulties!",
    "Seigneur Jésus, merci de m'accorder la grâce unique qui me guide vers la lumière du Père dans ma vie, et embrasse l'amour pour aider les gens en difficulté!"
  ];
  const noticificationText = [
    "開啟通知，計算過程會顯示提示。",
    "开启通知，计算过程会显示提示。",
    "Turn on the notification, prompts will be displayed during the calculation.",
    "Activez la notification, des invites seront affichées pendant le calcul."
  ];
  const applicationHint = [
    "使用方法：先按空格，再輸入數字或運算符號。",
    "使用方法：先按空格，再输入数字或运算符号。",
    "How to use: Press the space first, then enter a number or an operator.",
    "Comment utiliser: appuyez d'abord sur l'espace, puis entrez un nombre ou un opérateur."
  ];

  useEffect(() => {
    setScriptureVerseIndex(Math.floor(Math.random() * numberOfScriptureVerses));
  }, []);

  return (
    <View style={styles.mathsLearningContainer} >
      <LinearGradient
        colors={['#FAE9FF', '#E990F4']}
        style={styles.linearGradient}
      >
        <ScrollView>
          <View style={styles.headingContainer}>
            <HeadingSelect
              selectLabel="Language"
              selectIndex={languageIndex}
              setItemIndex={setLanguageIndex}
              itemsArray={languages}
            />
            <HeadingSelect
              selectLabel={bibleVersionsQuestion[languageIndex]}
              selectIndex={bibleVersionIndex}
              setItemIndex={setBibleVersionIndex}
              itemsArray={bibleVersions.slice(languageIndex * numberOfBibleVersions, languageIndex * numberOfBibleVersions + numberOfBibleVersions)}
            />
            <HeadingSelect
              selectLabel={topicsQuestion[languageIndex]}
              selectIndex={topicIndex}
              setItemIndex={setTopicIndex}
              itemsArray={topics.slice(languageIndex * numberOfTopics, languageIndex * numberOfTopics + numberOfTopics)}
            />
            <HeadingSelect
              selectLabel={learningToolsQuestion[languageIndex]}
              selectIndex={learningToolIndex}
              setItemIndex={setLearningToolIndex}
              itemsArray={learningTools.slice((languageIndex * numberOfTopics + topicIndex) * numberOfLearningTools, (languageIndex * numberOfTopics + topicIndex + 1) * numberOfLearningTools)}
            />
          </View>
          <View style={styles.scriptureVerseRow} >
            <LinearGradient
              start={[0, 1]}
              end={[1, 0]}
              colors={['red', 'orange', 'yellow', 'lime', 'green', 'lime', 'yellow', 'orange', 'red']}
              style={[styles.scriptureVerseBorder, styles.scriptureBorderWidth]}
            >
              <View style={[styles.scriptureVerseBorder, styles.scriptureBgColor]}>
                <Image style={styles.scriptureImage} source={scriptureImages[scriptureVerseIndex]} resizeMode="contain" />
                <Text style={styles.scriptureVerse}>{scriptureVerses[(languageIndex * numberOfBibleVersions + bibleVersionIndex) * numberOfScriptureVerses + scriptureVerseIndex]}</Text>
              </View>
            </LinearGradient>
          </View>
          <LongDivision
            languageIndex={languageIndex}
            topic={topics[languageIndex * numberOfTopics + topicIndex]}
            learningTool={learningTools[(languageIndex * numberOfTopics + topicIndex) * numberOfLearningTools + learningToolIndex]}
            topicIndex={topicIndex}
            learningToolIndex={learningToolIndex}
          />
          <View style={[styles.prayerRow, styles.topMargin]}>
            <Image style={styles.prayerImage} source={prayerImage} resizeMode="contain" />
            <Text style={styles.prayerText}>{prayers[languageIndex]}</Text>
          </View>
          <View style={styles.prayerRow}>
            <Text style={styles.commonText}>{applicationHint[languageIndex]}</Text>
          </View>
          <View style={styles.prayerRow}>
            <Text style={styles.commonText}>{noticificationText[languageIndex]}</Text>
          </View>
          <View style={styles.emailRow}>
            <Text style={styles.emailText}>samsoncsyuapple@gmail.com</Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}
/*

          <View style={{ width: 130, borderWidth: 5, borderColor: '#774400', borderRadius: 25}}>
            <LinearGradient
              start={[0, 1]}
              end={[1, 0]}
              colors={['green', '#66FF00', '#FFFF66', '#FFFF66', '#66FF00', 'green']}
              style={{ width: 120, height: 120, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}
            >
              <Text style={{ fontSize: 27 , color: "#774400", fontWeight: 700}}>Multi</Text>
              <Text style={{ fontSize: 27 , color: "#774400", fontWeight: 700}}>Digit</Text>
              <Text style={{ fontSize: 27 , color: "#774400", fontWeight: 700}}>Division</Text>
            </LinearGradient>
          </View>
*/

export default withTheme(MathsLearning);

const styles = StyleSheet.create({
  mathsLearningContainer: {
    margin: wp2dp('0.3%'),
    minHeight: hp2dp('97%'),
  },
  linearGradient: {
    margin: wp2dp('0.3%'),
    minHeight: hp2dp('97%'),
  },
  headingContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scriptureVerseRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  scriptureBorderWidth: {
    width: wp2dp('100%') < breakpoint ? wp2dp('97%') : wp2dp('82%'),
  },
  scriptureVerseBorder: {
    flexDirection: "row",
    alignItems: "center",
    width: wp2dp('100%') < breakpoint ? wp2dp('95%') : wp2dp('80%'),
    margin: wp2dp('1%'),
  },
  scriptureBgColor: {
    backgroundColor: theme.colors.myWhite,
  },
  scriptureImage: {
    height: wp2dp('100%') < breakpoint ? wp2dp('16%') : wp2dp('8%'),
    width: wp2dp('100%') < breakpoint ? wp2dp('16%') : wp2dp('8%'),
    padding: wp2dp('0.5%'),
  },
  scriptureVerse: {
    width: wp2dp('100%') < breakpoint ? wp2dp('78%') : wp2dp('70%'),
    fontSize: wp2dp('100%') < breakpoint ? wp2dp('4%') : wp2dp('2%'),
    color: theme.colors.myGreen,
  },
  prayerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  prayerImage: {
    height: wp2dp('100%') < breakpoint ? wp2dp('22%') : wp2dp('11%'),
    width: wp2dp('100%') < breakpoint ? wp2dp('20%') : wp2dp('10%'),
    padding: wp2dp('0.5%'),
  },
  prayerText: {
    width: wp2dp('100%') < breakpoint ? wp2dp('70%') : wp2dp('65%'),
    fontSize: wp2dp('100%') < breakpoint ? wp2dp('4%') : wp2dp('2%'),
    color: theme.colors.myDarkPurple,
  },
  topMargin: {
    marginTop: wp2dp('100%') < breakpoint ? wp2dp('4%') : wp2dp('2%'),
  },
  emailText: {
    width: wp2dp('92%'),
    textAlign: "right",
    fontSize: wp2dp('100%') < breakpoint ? wp2dp('3%') : wp2dp('1.5%'),
    color: theme.colors.myBrown,
    marginBottom: wp2dp('100%') < breakpoint ? wp2dp('15%') : wp2dp('0%'),
  },
  commonText: {
    fontSize: wp2dp('100%') < breakpoint ? wp2dp('2.8%') : wp2dp('1.4%'),
    textAlign: "center",
  },
});
