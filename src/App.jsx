/* eslint-disable no-unused-vars */
import AnimationScroll from './components/AnimationScroll';
import ChildPhotoWrapper from './components/ChildPhotoWrapper';
import Event from './components/Event';
import DressCode from './components/ DressCode';
import { useState } from 'react';
const events = [
  {
    id: 1,
    time: '14:00',
    event: 'Регистрация',
    location: 'дворец бракосочетания',
    image: 'ring.png',
  },{
    id: 2,
    time: '16:00',
    event: 'Фуршет',
    location: 'знакомства и общение',
    image: 'champagne.png',
  },{
    id: 3,
    time: '17:00',
    event: 'Банкет',
    location: 'танцы, веселье и много любви',
    image: 'dinner.png',
  }
];
const dresscodes = [
  {
    id: 1,
    code: '#FFD7E0'
  },
  {
    id: 2,
    code: '#E8E4D9'
  },
  {
    id: 3,
    code: '#E5B4B4'
  },
  {
    id: 4,
    code: '#FFF5E4'
  }
];



function App() {
  const nikita_chat_id = 5002463306;
  const regina_chat_id = 1078760880;
  const my_chat_id = 485073047;
  async function sendMessage(data) {
    const req = await fetch(
      'https://api.telegram.org/bot8083365022:AAEoaDWDRJIkbVi0sz6yacwJA1-y8aUY80Q/sendMessage',
      {
        headers: {
          'Content-Type': 'application/json'
        },
        body: data,
        method: 'POST'
      }
    );
    const response = await req.json();
    console.log(response.ok);
  }

  async function handleClick(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const guests = formData.get('guests');
    let chat_id = nikita_chat_id;
    const data = {
      chat_id,
      text: `${firstName + ':   ' + guests}`,
    } 
    
    await sendMessage(JSON.stringify(data));
    data.chat_id = regina_chat_id;
    await sendMessage(JSON.stringify(data));
  }

  const [firstName, setFirstName] = useState('');
  

  return (
    <>
      <div>
      <ChildPhotoWrapper />
        <div className="max-w-[600px] mx-auto">
            {/* <AnimationScroll>
              <Names hisName={hisName} herName={herName} />  
            </AnimationScroll> */}
            <AnimationScroll>
              <div className="px-4">
                <h3 className='font-kurale text-center text-3xl mb-8'>Узнали этих ребятишек?</h3>
                <div className='text-center font-lora text-xl mx-auto'>
                  <p>Да-да, это мы! Время пролетело так бысро, представляете?</p>
                  <p>И вот мы повзрослели и приняли решение, что пора жениться!</p>
                  <p>Приглашаем вас присоединиться к нашему семейному празднику - нашей свадьбе!</p>
                  <p>Будем рады, если этто событие вы разделите с наим.</p>
                </div>
              </div>
            </AnimationScroll>
            <AnimationScroll>
              <div  className='text-center font-lora text-xl'>
                <p>СВАДЬБА СОСТОИТСЯ:</p>
                <p className='text-3xl'><strong><i>12 июля</i></strong></p>
                <img src="/images/boy-and-girl.png" alt="boy-and-girl" className='mx-auto' />
                <div className='photo m-10 pt-2 px-4 pb-10'>
                  <img src="/images/main-photo.jpeg" alt="Main photo" />
                </div>
              </div>
            </AnimationScroll>
            <AnimationScroll>
              <div className='px-2'>
                <h3 className='text-center text-4xl font-kurale mb-4'>Тайминг</h3>
                <p className='text-center mb-8'>
                  Просим Вас прибыть в ЗАГС за 20-30 минут до начала регистрации
                </p>
                <div className='flex flex-col gap-[30px]'>
                  {events.map(event => (
                    <Event event={event} key={event.id} />
                  ))}
                </div>
                
              </div>
            </AnimationScroll>
            <AnimationScroll>
            <h3 className='font-kurale text-center text-4xl mb-4'>Дресс-код</h3>
            <div className='text-center font-lora text-xl mx-auto mb-4 px-4'> 
              <p className='text-center mb-8 font-lora text-xl'>
                Мы старались сделать праздник красивым и будем рады, если вы поддержите
                цветовую гамму нашей свадьбы!
              </p>
              <div className='flex justify-center gap-[15px]'>
                  {dresscodes.map(dresscode => (
                    <DressCode key={dresscode.id} code={dresscode.code} />
                  ))}
              </div>
            </div>
            </AnimationScroll>
            <AnimationScroll>
              <div className='px-4'>
              <h3 className='font-kurale text-center text-2xl mb-4'>
                Пожалуйста, подтвердите свое присутствие
              </h3>
              <p className='text-center mb-8 font-lora text-xl'>
                Ваши ответы помогут нам при организации нашего торжетсва.
              </p>
              <p className='text-center font-lora text-xl mb-12'>
                Мы будем ждать от вас ответ до 01.07
              </p>
              <form 
                className='form font-lora px-4' 
                onSubmit={handleClick}
              >
                  <p className='mb-2'>Присутствие на торжестве</p>
                  <div className='flex flex-col gap-[10px] mb-4'>
                    <label htmlFor="alone" className='flex gap-[10px]'>
                      <input 
                        type="radio" 
                        defaultChecked={true} 
                        value="Я приду/Мы придем" 
                        name='guests'
                      />
                      <span>Я приду/Мы придем</span>
                    </label>
                    <label htmlFor="two" className='flex gap-[10px]'>
                      <input 
                        type="radio" 
                        defaultChecked={false} 
                        value="Буду с парой (+1)" 
                        name='guests'
                      />
                      <span>Буду с парой (+1)</span>
                    </label>
                    <label htmlFor="cannot" className='flex gap-[10px]'>
                      <input 
                        type="radio" 
                        defaultChecked={false} 
                        value="Прийти не получается" 
                        name='guests'
                      />
                      <span>Прийти не получается</span>
                    </label>
                  </div>
                  <p className='font-lora text-2xl mb-2'>Имя и фамилия</p>
                  <p className='text-zinc-600 mb-4'>
                    Если вы придете с парой, внесите все имена. Просьба написать без запятых и символов
                  </p>
                  <input 
                    type="text" 
                    onChange={e => setFirstName(e.target.value)} 
                    className='border-b border-black text-xl block w-full focus:outline-none'
                    placeholder='Иван Иванов'
                  />
                  <button type='submit'
                  className='w-full bg-gradient-to-l bg-zinc-600 text-white
                  py-4 rounded-[30px] mt-6 font-lora text-xl'>
                    Отправить
                  </button>
              </form>
              </div>
            </AnimationScroll>
        </div>
      </div>
    </>
  )
}

export default App
