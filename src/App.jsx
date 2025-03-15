/* eslint-disable no-unused-vars */
import AnimationScroll from './components/AnimationScroll';
import ChildPhotoWrapper from './components/ChildPhotoWrapper';
import Event from './components/Event';
import DressCode from './components/ DressCode';
import { useState } from 'react';
import Calendar from './components/Calendar';
import photo from './assets/images/main-photo.jpeg';
const events = [
  {
    id: 1,
    time: '11:40',
    event: 'ЗАГС',
    location: 'дворец бракосочетания',
    image: 'ring.png',
  },{
    id: 2,
    time: '16:00',
    event: 'СБОР ГОСТЕЙ',
    location: 'знакомства и общение',
    image: 'crowd.png',
  },{
    id: 3,
    time: '16:20',
    event: 'Церемония бракосочетания',
    location: 'Главное событие',
    image: 'champagne.png',
  },{
    id: 4,
    time: '17:30',
    event: 'Банкет',
    location: 'танцы, веселье и много любви',
    image: 'dinner.png',
  }
];
const dresscodes = [
  {
    id: 1,
    code: '#C7986F'
  },
  {
    id: 2,
    code: '#FAEED6'
  },
  {
    id: 3,
    code: '#F4E1CB'
  },
  {
    id: 4,
    code: '#EBCFB4'
  }
];



function App() {
  const nikita_chat_id = 5002463306;
  const regina_chat_id = 1078760880;
  // const my_chat_id = 485073047;
  const [isSent, setIsSent] = useState(false);

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
    setIsSent(true);
  }

  const [firstName, setFirstName] = useState('');
  

  return (
    <>
    
      <div className='max-w-[500px] mx-auto'>
      <ChildPhotoWrapper />
        <div className="max-w-[600px] mx-auto">
            <AnimationScroll>
              <div className="px-4">
                <h3 className='font-kurale text-center text-3xl mb-8'>Узнали этих ребятишек?</h3>
                <div className='text-center font-lora text-xl mx-auto'>
                  <p>Да-да, это мы! Время пролетело так быстро, представляете?</p>
                  <p>И вот мы повзрослели и приняли решение, что пора жениться!</p>
                  <p>Приглашаем вас присоединиться к нашему семейному празднику - нашей свадьбе!</p>
                  <p>Будем рады, если это событие вы разделите с нами.</p>
                </div>
              </div>
            </AnimationScroll>
            <AnimationScroll>
              <div  className='text-center font-lora text-xl'>
                <p>СВАДЬБА СОСТОИТСЯ:</p>
                <p className='text-4xl underline text-zinc-800'><i>12 июля 2025 года</i></p>
                <Calendar date={new Date(2025, 6, 12)} />
                <div className='photo m-10 pt-2 px-4 pb-10'>
                  <img src={photo} rel='preload' alt="Main photo" />
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
              <div className="px-2 mb-8">
                <h3 className='font-kurale text-center text-4xl mb-4'>Локация</h3>
                <p className='text-center mb-2 font-lora text-xl'>
                  Дворец бракосочетания
                </p>
                <p className='text-center mb-8 font-lora text-xl'>
                  г.Альметьевск, ул.Нефтяников, д.8
                </p>
                <a href="https://yandex.ru/maps/org/upravleniye_zags_ispolnitelnogo_komiteta_almetyevskogo_munitsipalnogo_rayona/1067510409?si=x9vtmcur9kxvvpnutbukwg0wr4" 
                className="block primary-btn mx-auto" target='_blank'>
                  Посмотреть на карте
                </a>

                <p className='text-center mt-6 mb-2 font-lora text-xl'>
                  Ресторан Венеция
                </p>
                <p className='text-center mb-8 font-lora text-xl'>
                г.Альметьевск, ул.Защитников Отечества, д.89А
                </p>
                <a href="https://yandex.ru/maps/org/venetsiya/11198301229?si=x9vtmcur9kxvvpnutbukwg0wr4" 
                className="block primary-btn mx-auto" target='_blank'>
                  Посмотреть на карте
                </a>
              </div>
            </AnimationScroll>
            <AnimationScroll>
              <div className="px-2 mb-8">
                <h3 className='font-kurale text-center text-4xl mb-4'>
                  Пожелания
                </h3>
                <p className='text-center mb-2 font-lora text-lg px-4'>
                  Дорогие гости! Мы создаем вечер, где детали становятся частью большой любви. 
                  Просим Вас оставить детей дома и присоединиться к нам, чтобы вместе написать
                  новую страничку нашей истории.
                </p>
              </div>
            </AnimationScroll>
            {!isSent ? (
              <AnimationScroll>
              <div className='px-4'>
              <h3 className='font-kurale text-center text-2xl mb-4'>
                Пожалуйста, подтвердите свое присутствие.
              </h3>
              <p className='text-center mb-8 font-lora text-xl'>
                Ваши ответы помогут нам при организации нашего торжетсва.
              </p>
              <p className='text-center font-lora text-xl mb-12'>
                Мы будем ждать от вас ответ до 25.05.2025.
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
                  <p className='text-zinc-600 mb-4'>
                    Если вы придете с парой, внесите все имена. 
                    Просьба написать без запятых и символов.
                  </p>
                  <input 
                    type="text" 
                    onChange={e => setFirstName(e.target.value)} 
                    className='border-b border-black text-xl block w-full focus:outline-none'
                    placeholder='Иван Иванов'
                  />
                  <button type='submit'
                  className='mt-6 text-xl primary-btn primary-btn_large'>
                    Отправить
                  </button>
              </form>
              </div>
            </AnimationScroll>
            ) : (
              <div className='mb-12 py-4'>
                <h3 className='font-kurale text-center text-2xl mb-4'>
                  Спасибо за обратную связь!
                </h3>
                <img src="images/done.png" alt="Done" className='block mx-auto' />
              </div>
            )}
        </div>
      </div>
    </>
  )
}

export default App
