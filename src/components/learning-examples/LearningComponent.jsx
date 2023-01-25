import FirstComponent from './FirstComponent'
import {FifthComponent} from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import FourComponent from './FourComponent'

export default function LearningComponent() {
    return (
    <div className="App">
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourComponent />
        <FifthComponent />
      </div>
    )
    
  }