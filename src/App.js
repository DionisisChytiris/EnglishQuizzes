import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar1 from './Navbar1'
import Footer from './Footer'
import Home from './Navbar/Home'
import Quizzes from './Navbar/Quizzes'
import Grammar from './Navbar/Grammar'
import FCE_Practice from './Navbar/FCE_Practice'
import About from './Navbar/About'
import Contact from './Navbar/Contact'
import Prepositions from './components/prepositions/mainPages/Prepositions_home';
import Pronouns from './components/pronouns/mainPages/Pronouns_home';
import Articles from './components/articles/mainPages/Articles_home';
import Tenses1 from './components/tenses1/mainPages/Tenses_home';
import Tenses2 from './components/tenses2/mainPages/Tenses_home';
import Tenses3 from './components/tenses3/mainPages/Tenses_home';
import Conditionals from './components/conditionals/mainPages/Conditionals_home'
import MainPage_Tenses3 from './components/tenses3/mainPages/MainPage';
import Verbs_to_ing from './components/verbs_to_ing/mainPages/Verbs_to_ing_home';
import OpenClose_home from './FCE Practice/OpenClose/OpenClose_home'
import WordFormation_home from './FCE Practice/WordFormation/WordFormation_home'
import MultipleChoice_home from './FCE Practice/MultipleChoice/MultipleChoice_home'
import keyWord_home from './FCE Practice/KeyWordTransformation/KeyWord_home'
import Quiz1 from './components/prepositions/Quiz1';
import Quiz2 from './components/prepositions/Quiz2';
import Quiz3 from './components/prepositions/Quiz3';
import Quiz4 from './components/prepositions/Quiz4';
import Test1Prepositions from './components/prepositions/Test1';
import Quiz1Pronouns from './components/pronouns/quizzes/Quiz1Pronouns';
import Quiz2Pronouns from './components/pronouns/quizzes/Quiz2Pronouns';
import Quiz3Pronouns from './components/pronouns/quizzes/Quiz3Pronouns';
import Quiz4Pronouns from './components/pronouns/quizzes/Quiz4Pronouns';
import Quiz0Articles from './components/articles/quizzes/Quiz0Articles';
import Quiz1Articles from './components/articles/quizzes/Quiz1Articles';
import Quiz2Articles from './components/articles/quizzes/Quiz2Articles';
import Quiz3Articles from './components/articles/quizzes/Quiz3Articles';
import Quiz4Articles from './components/articles/quizzes/Quiz4Articles';
import Quiz1Tenses from './components/tenses1/quizzes/Quiz1Tenses';
import Quiz2Tenses from './components/tenses1/quizzes/Quiz2Tenses';
import Quiz3Tenses from './components/tenses1/quizzes/Quiz3Tenses';
import Quiz4Tenses from './components/tenses1/quizzes/Quiz4Tenses';
import Quiz1Tenses2 from './components/tenses2/quizzes/Quiz1Tenses';
import Quiz2Tenses2 from './components/tenses2/quizzes/Quiz2Tenses';
import Quiz3Tenses2 from './components/tenses2/quizzes/Quiz3Tenses';
import Quiz4Tenses2 from './components/tenses2/quizzes/Quiz4Tenses';
import Quiz1Tenses3 from './components/tenses3/quizzes/Quiz1Tenses';
import Quiz2Tenses3 from './components/tenses3/quizzes/Quiz2Tenses';
import Quiz3Tenses3 from './components/tenses3/quizzes/Quiz3Tenses';
import Quiz4Tenses3 from './components/tenses3/quizzes/Quiz4Tenses';
import Quiz1Verb_ing from './components/verbs_to_ing/quizzes/Quiz1'
import Quiz2Verb_ing from './components/verbs_to_ing/quizzes/Quiz2'
import Quiz3Verb_ing from './components/verbs_to_ing/quizzes/Quiz3'
import Quiz4Verb_ing from './components/verbs_to_ing/quizzes/Quiz4'
import OpenClose1 from './FCE Practice/OpenClose/OpenClosePractice/openClose1'
import OpenClose2 from './FCE Practice/OpenClose/OpenClosePractice/openClose2'
import OpenClose3 from './FCE Practice/OpenClose/OpenClosePractice/openClose3'
import WordFormation1 from './FCE Practice/WordFormation/wordFormation/wordFormation1'
import MultipleChoice1 from './FCE Practice/MultipleChoice/MultipleChoice/MultipleChoice1'
import IrregularVerbs from './General Pages/popUpIrregularVerbs/IrregularVerbs'
import StativeVerbs from './General Pages/StativeVerbs'
import ScrollToTop from './General Pages/ScrollToTop'
import Modals from './components/modals/mainPages/Modals_home'
import Quiz1Modal from './components/modals/quizzes/Quiz1Modal'
import Quiz2Modal from './components/modals/quizzes/Quiz2Modal'
import Quiz3Modal from './components/modals/quizzes/Quiz3Modal'
import Tenses3Grammar from './components/tenses3/mainPages/Grammar'
import Modal_Grammar from './components/modals/mainPages/Grammar'
import Passive from './components/passive/mainPages/Passive_home'
import Quiz1Passive from './components/passive/quizzes/Quiz1Passive'
import Quiz2Passive from './components/passive/quizzes/Quiz2Passive'
import Quiz3Passive from './components/passive/quizzes/Quiz3Passive'
import Passive_Grammar from './components/passive/mainPages/Grammar'
import Articles_Grammar from './components/articles/mainPages/Grammar'
import Prepositions_Grammar from './components/prepositions/mainPages/Grammar'
import Tenses1_Grammar from './components/tenses1/mainPages/Grammar'
import Pronouns_Grammar from './components/pronouns/mainPages/Grammar'
import Tenses2_Grammar from './components/tenses2/mainPages/Grammar'
import Verbs_to_ing_Grammar from './components/verbs_to_ing/mainPages/Grammar'
import Conditionals_Grammar from './components/conditionals/mainPages/Grammar'
import Quiz_1Conditionals from './components/conditionals/quizzes_back/quiz_1Conditionals'
import Quiz_2Conditionals from './components/conditionals/quizzes_back/quiz_2Conditionals'
import Quiz_3Conditionals from './components/conditionals/quizzes_back/quiz_3Conditionals'



function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Navbar1 />
        <Route path='/' exact component={Home}/>
        <Route path='/quizzes' component={Quizzes}/>
        <Route path='/grammar' component={Grammar}/>
        <Route path='/fce_practice' component={FCE_Practice}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/prepositions' component={Prepositions}/>
        <Route path='/pronouns' component={Pronouns}/>
        <Route path='/articles' component={Articles}/>
        <Route path='/modals' component={Modals}/>
        <Route path='/tenses1' component={Tenses1}/>
        <Route path='/tenses2' component={Tenses2}/>
        <Route path='/tenses3' component={MainPage_Tenses3}/>
        <Route path='/tenses3_quizzes' component={Tenses3}/>
        <Route path='/tenses3_grammar' component={Tenses3Grammar}/>
        <Route path='/verbs_to_ing' component={Verbs_to_ing}/>
        <Route path='/passive' component={Passive}/>
        <Route path='/conditionals' component={Conditionals}/>
        <Route path='/openClose' component={OpenClose_home}/>
        <Route path='/wordFormation' component={WordFormation_home}/>
        <Route path='/multipleChoice' component={MultipleChoice_home}/>
        <Route path='/keyWordTransformations' component={keyWord_home}/>
        <Route path='/prepositions_grammar' component={Prepositions_Grammar}/>
        <Route path='/quiz1' component={Quiz1}/>
        <Route path='/quiz2' component={Quiz2}/>
        <Route path='/quiz3' component={Quiz3}/>
        <Route path='/quiz4' component={Quiz4} />
        <Route path='/test1prepositions' component={Test1Prepositions} />
        <Route path='/pronouns_grammar' component={Pronouns_Grammar} />  
        <Route path='/quiz5' component={Quiz1Pronouns} />  
        <Route path='/quiz6' component={Quiz2Pronouns} />  
        <Route path='/quiz7' component={Quiz3Pronouns} />  
        <Route path='/quiz8' component={Quiz4Pronouns} />  
        <Route path='/modal_grammar' component={Modal_Grammar} />  
        <Route path='/modal1' component={Quiz1Modal} />  
        <Route path='/modal2' component={Quiz2Modal} />  
        <Route path='/modal3' component={Quiz3Modal} />
        <Route path='/articles_grammar' component={Articles_Grammar} />  
        <Route path='/quiz-9' component={Quiz0Articles} />  
        <Route path='/quiz9' component={Quiz1Articles} />  
        <Route path='/quiz10' component={Quiz2Articles} />  
        <Route path='/quiz11' component={Quiz3Articles} />  
        <Route path='/quiz12' component={Quiz4Articles} />  
        <Route path='/tenses1_grammar' component={Tenses1_Grammar} />  
        <Route path='/tenses1quiz1' component={Quiz1Tenses} />  
        <Route path='/tenses1quiz2' component={Quiz2Tenses} />  
        <Route path='/tenses1quiz3' component={Quiz3Tenses} />  
        <Route path='/tenses1quiz4' component={Quiz4Tenses} />
        <Route path='/irregularVerbs' component={IrregularVerbs} />
        <Route path='/stativeVerbs' component={StativeVerbs} />
        <Route path='/tenses2_grammar' component={Tenses2_Grammar} />
        <Route path='/tenses2quiz1' component={Quiz1Tenses2} />
        <Route path='/tenses2quiz2' component={Quiz2Tenses2} />
        <Route path='/tenses2quiz3' component={Quiz3Tenses2} />
        <Route path='/tenses2quiz4' component={Quiz4Tenses2} />
        <Route path='/tenses3quiz1' component={Quiz1Tenses3} />
        <Route path='/tenses3quiz2' component={Quiz2Tenses3} />
        <Route path='/tenses3quiz3' component={Quiz3Tenses3} />
        <Route path='/tenses3quiz4' component={Quiz4Tenses3} />
        <Route path='/verbs_to_ing_grammar' component={Verbs_to_ing_Grammar} />
        <Route path='/verbs_to_ing_1' component={Quiz1Verb_ing} />
        <Route path='/verbs_to_ing_2' component={Quiz2Verb_ing} />
        <Route path='/verbs_to_ing_3' component={Quiz3Verb_ing} />
        <Route path='/verbs_to_ing_4' component={Quiz4Verb_ing} />
        <Route path='/passive_grammar' component={Passive_Grammar} />
        <Route path='/passive_1' component={Quiz1Passive} />
        <Route path='/passive_2' component={Quiz2Passive} />
        <Route path='/passive_3' component={Quiz3Passive} />
        <Route path='/conditionals_grammar' component={Conditionals_Grammar} />
        <Route path='/conditionals_1' component={Quiz_1Conditionals}/>
        <Route path='/conditionals_2' component={Quiz_2Conditionals}/>
        <Route path='/conditionals_3' component={Quiz_3Conditionals}/>
        <Route path='/openClose1' component={OpenClose1} />
        <Route path='/openClose2' component={OpenClose2} />
        <Route path='/openClose3' component={OpenClose3} />
        <Route path='/wordFormation1' component={WordFormation1} />
        <Route path='/multipleChoice1' component={MultipleChoice1} />
        <Footer/>
      </Router>
    </>
  );
}

export default App;
