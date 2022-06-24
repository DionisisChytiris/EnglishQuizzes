import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar1 from './Navbar1'
import Footer from './Footer/Footer'
import ScrollToTop from './General Pages/ScrollToTop'
// Navbar
import { Home, Quizzes, Grammar, FcePractice, About, Contact} from './Navbar/index'
// home pages
import Prepositions from './components/prepositions/mainPages/Prepositions_home';
import Pronouns from './components/pronouns/mainPages/Pronouns_home';
import Articles from './components/articles/mainPages/Articles_home';
import Conditionals from './components/conditionals/mainPages/Conditionals_home'
import VerbsToIng from './components/verbs_to_ing/mainPages/Verbs_to_ing_home';
import Tenses1 from './components/tenses1/mainPages/Tenses_home';
import Tenses2 from './components/tenses2/mainPages/Tenses_home';
import Tenses3 from './components/tenses3/mainPages/Tenses_home';
import Modals from './components/modals/mainPages/Modals_home'
import Passive from './components/passive/mainPages/Passive_home'
import OpenClose_home from './FCE Practice/OpenClose/OpenClose_home'
import WordFormation_home from './FCE Practice/WordFormation/WordFormation_home'
import MultipleChoice_home from './FCE Practice/MultipleChoice/MultipleChoice_home'
import keyWord_home from './FCE Practice/KeyWordTransformation/KeyWord_home'
// Prepositions Quizzes
import {Quiz1, Quiz2, Quiz3, Quiz4, Quiz5, Quiz6, Test1Prepositions} from './components/prepositions/quizzes_back'
// Pronouns Quizzes
import { Quiz1Pronouns, Quiz2Pronouns, Quiz3Pronouns, Quiz4Pronouns} from './components/pronouns/quizzes_back'
// Article Quizzes
import { Quiz0Articles, Quiz1Articles, Quiz2Articles, Quiz3Articles, Quiz4Articles} from './components/articles/quizzes_back'
// Tenses Quizzes
import { Quiz1Tenses, Quiz2Tenses, Quiz3Tenses, Quiz4Tenses} from './components/tenses1/quizzes_back'
import { Quiz1Tenses2, Quiz2Tenses2, Quiz3Tenses2, Quiz4Tenses2 } from './components/tenses2/quizzes_back'
import { Quiz1Tenses3, Quiz2Tenses3, Quiz3Tenses3, Quiz4Tenses3 } from './components/tenses3/quizzes_back'
// Gerund Quizzes
import { Quiz1VerbIng, Quiz2VerbIng, Quiz3VerbIng, Quiz4VerbIng} from './components/verbs_to_ing/quizzes_back'
// Modal Quizzes
import { Quiz1Modal, Quiz2Modal, Quiz3Modal} from './components/modals/quizzes_back'
// Passive Quizzes
import { Quiz1Passive, Quiz2Passive, Quiz3Passive } from './components/passive/quizzes_back'
// Conditionals Quizzes
import { Quiz1Conditionals, Quiz2Conditionals, Quiz3Conditionals} from './components/conditionals/quizzes_back'
// Grammar pages
import GeneralTensesPage from './General Pages/General Tenses Page/GeneralTensesPage'
import PrepositionsGrammar from './components/prepositions/mainPages/Grammar'
import ArticlesGrammar from './components/articles/mainPages/Grammar'
import PronounsGrammar from './components/pronouns/mainPages/Grammar'
import Modal_Grammar from './components/modals/mainPages/Grammar'
import Tenses1_Grammar from './components/tenses1/mainPages/Grammar'
import Tenses2_Grammar from './components/tenses2/mainPages/Grammar'
import Tenses3Grammar from './components/tenses3/mainPages/Grammar'
import GerundGrammar from './components/verbs_to_ing/mainPages/Grammar'
import Conditionals_Grammar from './components/conditionals/mainPages/Grammar'
import Passive_Grammar from './components/passive/mainPages/Grammar'
import { PresentSimple, PresentContinuous, PastSimple, PastContinuous, FutureSimple, FutureContinuous} from './components/tenses1/GrammarPages'
import { PresentPerfect, PresentPerfectContinuous, PastPerfect, PastPerfectContinuous, FuturePerfect, FuturePerfectContinuous } from './components/tenses2/GrammarPages'
// FCE
import OpenClose1 from './FCE Practice/OpenClose/OpenClosePractice/openClose1'
import OpenClose2 from './FCE Practice/OpenClose/OpenClosePractice/openClose2'
import OpenClose3 from './FCE Practice/OpenClose/OpenClosePractice/openClose3'
import WordFormation1 from './FCE Practice/WordFormation/wordFormation/wordFormation1'
import MultipleChoice1 from './FCE Practice/MultipleChoice/MultipleChoice/MultipleChoice1'
// Extra pages
import IrregularVerbs from './General Pages/popUpIrregularVerbs/IrregularVerbs'
import StativeVerbs from './General Pages/StativeVerbs'

function App() {
  return (
    <BrowserRouter>
      <Navbar1 />
      <ScrollToTop/>
      <Routes>
        {/* <Switch> */}
        {/* Navbar */}
        <Route path='/' exact element={<Home/>}/>
        <Route path='/quizzes' element={<Quizzes/>}/>
        <Route path='/grammar' element={<Grammar/>}/>
        <Route path='/fce_practice' element={<FcePractice/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>} />
        {/* Home pages */}
        <Route path='/prepositions' element={<Prepositions/>}/>
        <Route path='/pronouns' element={<Pronouns/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/modals' element={<Modals/>}/>
        <Route path='/tenses1' element={<Tenses1/>}/>
        <Route path='/tenses2' element={<Tenses2/>}/>
        <Route path='/tenses3' element={<Tenses3/>} />
        <Route path='/verbs_to_ing' element={<VerbsToIng/>}/>
        <Route path='/conditionals' element={<Conditionals/>}/>
        <Route path='/passive' element={<Passive/>}/>
        <Route path='/openClose' element={<OpenClose_home/>}/>
        <Route path='/wordFormation' element={<WordFormation_home/>}/>
        <Route path='/multipleChoice' element={<MultipleChoice_home/>}/>
        <Route path='/keyWordTransformations' element={<keyWord_home/>}/>
        {/* Grammar pages */}
        <Route path='/generalTensesPage' element={<GeneralTensesPage/>}/>
        <Route path='/prepositions_grammar' element={<PrepositionsGrammar/>}/>
        <Route path='/articles_grammar' element={<ArticlesGrammar/>} />  
        <Route path='/pronouns_grammar' element={<PronounsGrammar/>} />  
        <Route path='/modal_grammar' element={<Modal_Grammar/>} />  
        <Route path='/tenses1_grammar' element={<Tenses1_Grammar/>} />  
        <Route path='/tenses2_grammar' element={<Tenses2_Grammar/>} />
        <Route path='/tenses3_grammar' element={<Tenses3Grammar/>} />
        <Route path='/verbs_to_ing_grammar' element={<GerundGrammar/>} />
        <Route path='/conditionals_grammar' element={<Conditionals_Grammar/>} />
        <Route path='/passive_grammar' element={<Passive_Grammar/>} />
        <Route path='/present_simple' element={<PresentSimple/>}/>
        <Route path='/past_simple' element={<PastSimple/>}/>
        <Route path='/future_simple' element={<FutureSimple/>}/>
        <Route path='/present_continuous' element={<PresentContinuous/>}/>
        <Route path='/past_continuous' element={<PastContinuous/>}/>
        <Route path='/future_continuous' element={<FutureContinuous/>}/>
        <Route path='/future_perfect' element={<FuturePerfect/>}/>
        <Route path='/past_perfect' element={<PastPerfect/>}/>
        <Route path='/present_perfect' element={<PresentPerfect/>}/>
        <Route path='/past_perfect_continuous' element={<PastPerfectContinuous/>}/>
        <Route path='/present_perfect_continuous' element={<PresentPerfectContinuous/>}/>
        <Route path='/future_perfect_continuous' element={<FuturePerfectContinuous/>}/>
        {/* Prepositions Quizzes */}
        <Route path='/quiz1' element={<Quiz1/>}/>
        <Route path='/quiz2' element={<Quiz2/>}/>
        <Route path='/quiz3' element={<Quiz3/>}/>
        <Route path='/quiz4' element={<Quiz4/>} />
        <Route path='/quiz4_1' element={<Quiz5/>} />
        <Route path='/quiz4_2' element={<Quiz6/>} />
        <Route path='/test1prepositions' element={<Test1Prepositions/>} />
        {/* Pronouns Quizzes */}
        <Route path='/quiz5' element={<Quiz1Pronouns/>} />  
        <Route path='/quiz6' element={<Quiz2Pronouns/>} />  
        <Route path='/quiz7' element={<Quiz3Pronouns/>} />  
        <Route path='/quiz8' element={<Quiz4Pronouns/>} />  
        {/* Modal Quizzes */}
        <Route path='/modal1' element={<Quiz1Modal/>} />  
        <Route path='/modal2' element={<Quiz2Modal/>} />  
        <Route path='/modal3' element={<Quiz3Modal/>} />
        {/* Article Quizzes */}
        <Route path='/quiz-9' element={<Quiz0Articles/>} />  
        <Route path='/quiz9' element={<Quiz1Articles/>} />  
        <Route path='/quiz10' element={<Quiz2Articles/>} />  
        <Route path='/quiz11' element={<Quiz3Articles/>} />  
        <Route path='/quiz12' element={<Quiz4Articles/>} />  
        {/* Tenses */}    
        <Route path='/tenses1quiz1' element={<Quiz1Tenses/>} />  
        <Route path='/tenses1quiz2' element={<Quiz2Tenses/>} />  
        <Route path='/tenses1quiz3' element={<Quiz3Tenses/>} />  
        <Route path='/tenses1quiz4' element={<Quiz4Tenses/>} />
        <Route path='/tenses2quiz1' element={<Quiz1Tenses2/>} />
        <Route path='/tenses2quiz2' element={<Quiz2Tenses2/>} />
        <Route path='/tenses2quiz3' element={<Quiz3Tenses2/>} />
        <Route path='/tenses2quiz4' element={<Quiz4Tenses2/>} />
        <Route path='/tenses3quiz1' element={<Quiz1Tenses3/>} />
        <Route path='/tenses3quiz2' element={<Quiz2Tenses3/>} />
        <Route path='/tenses3quiz3' element={<Quiz3Tenses3/>} />
        <Route path='/tenses3quiz4' element={<Quiz4Tenses3/>} />
        {/* Extra pages */}
        <Route path='/irregularVerbs' element={<IrregularVerbs/>} />
        <Route path='/stativeVerbs' element={<StativeVerbs/>} />
        {/* Gerund Quizzes */}
        <Route path='/verbs_to_ing_1' element={<Quiz1VerbIng/>} />
        <Route path='/verbs_to_ing_2' element={<Quiz2VerbIng/>} />
        <Route path='/verbs_to_ing_3' element={<Quiz3VerbIng/>} />
        <Route path='/verbs_to_ing_4' element={<Quiz4VerbIng/>} />
        {/* Passive Quizzes */}
        <Route path='/passive_1' element={<Quiz1Passive/>} />
        <Route path='/passive_2' element={<Quiz2Passive/>} />
        <Route path='/passive_3' element={<Quiz3Passive/>} />
        {/* Conditionals Quizzes */}
        <Route path='/conditionals_1' element={<Quiz1Conditionals/>}/>
        <Route path='/conditionals_2' element={<Quiz2Conditionals/>}/>
        <Route path='/conditionals_3' element={<Quiz3Conditionals/>} />
        {/* FCE pages */}
        <Route path='/openClose1' element={<OpenClose1/>} />
        <Route path='/openClose2' element={<OpenClose2/>} />
        <Route path='/openClose3' element={<OpenClose3/>} />
        <Route path='/wordFormation1' element={<WordFormation1/>} />
        <Route path='/multipleChoice1' element={<MultipleChoice1/>} />
        {/* </Switch> */}
      </Routes>
        {/* Footer  */}
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
