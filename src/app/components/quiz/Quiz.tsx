import styles from './Quiz.module.css'
import { IconCheck } from '@tabler/icons-react';
import {Radio, Checkbox, TextInput, Button, Group, Notification, rem, MantineProvider, Slider, createTheme, SegmentedControl, NumberInput} from '@mantine/core';
import '@mantine/core/styles.css'
import {notifications} from '@mantine/notifications';
import {useForm} from '@mantine/form'
import {useEffect, useState} from 'react'
import {sendMessage} from '@/api/telegramTest'
import {useResize} from './/useEffect'

export default function Quiz({active,setActive}:any){
    const [isLoading,setLoading] = useState(false)

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            number:'',
            name: '',
        },

        validate: {
            //email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });
    const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;
    const [length,setLength]= useState(7)
    const [finishing,setFinishing]= useState('Профлист цветной')
    const [outFinishing,setOutFinishing]= useState('ОСП 19мм')
    const [windows,setWindows]= useState<string | number>('2')
    const [windowsSize,setWindowsSize]= useState('110x70')
    const [electric,setElectric]= useState('С электрикой')
    const {width} = useResize()
    const handleSumbmit = async ({number,name}:typeof form.values): Promise<void> =>{
        try{
            setLoading(true)
            const message = `УРААА ЗАЯВКА!!!%0AИмя: ${name}%0AТелефон: ${number}%0AДлина: ${length}м%0AОтделка снаружи: ${finishing}%0AОтделка внутри: ${outFinishing}%0AКоличество окон: ${windows}%0AРазмер окон ${windowsSize}%0AЭлектрика: ${electric}`;
            await sendMessage(message)
            setLoading(false)

        } catch (e) {
            form.setFieldError('number','Ошибка');
        }

    }

    const theme = createTheme({
        primaryColor: 'cyan'
    })
    const activeStyleQuiz:string = `${styles.active} ${styles.quizPage}`
    const inActiveStyleQuiz:string = `${styles.inActive} ${styles.quizPage}`
    const nextHandler = ()=>{
        setActive(active+1)
    }
    const backHandler = ()=>{
        if(active!=0) {
            setActive(active - 1)
        }
    }

    const notification = () => {
        notifications.show({
            id: 'hello-there',
            withCloseButton: true,
            onClose: () => console.log('unmounted'),
            onOpen: () => console.log('mounted'),
            autoClose: 5000,
            title: "You've been compromised",
            message: 'Leave the building immediately',
            color: 'red',
            // icon: <IconX />,
            className: 'my-notification-class',
            style: { backgroundColor: 'red' },
            loading: false,
        })
    }
    return (

        <MantineProvider defaultColorScheme="dark">
            {/*<Notifications/>*/}
            <div className={styles.wrapper}>
                <div className={active == 0 ? activeStyleQuiz : inActiveStyleQuiz}>
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h2 className='mb-2 text-2xl font-bold'>КАКОЙ ДЛИНЫ НУЖНА БЫТОВКА?</h2>
                            <h3 className='mb-7'>Передвиньте ползунок от 2х до 12 метров</h3>
                            <Slider
                                value={length}
                                onChange={setLength}
                                className="mt-15 pt-10"
                                min={2}
                                max={12}
                                color="blue"
                                defaultValue={7}
                                size='xl'
                                labelAlwaysOn
                                marks={[
                                    {value: 0, label: '0м'},
                                    {value: 12, label: '12м'},
                                ]}/>
                        </div>
                        <div className={styles.buttons}>
                            <Group justify="flex-end" mt="md">
                                <Button variant="fill" size='lg' loading={isLoading}
                                        onClick={(nextHandler)}>Далее</Button>
                            </Group>
                        </div>
                    </div>
                </div>
                <div className={active == 1 ? activeStyleQuiz : inActiveStyleQuiz}>
                    <div className="flex flex-col gap-4 h-full justify-between">
                        <div>
                            <h2 className='mb-8 text-2xl font-bold'>ОТДЕЛКА СНАРУЖИ</h2>
                            <div className='flex justify-between px-12 mb-5'>
                                <img className="rounded-3xl" src="./img/colorProf.png" alt="color"/>
                                <img className="rounded-3xl" src="./img/zincProf.png" alt="color"/>
                                <img className="rounded-3xl" src="./img/siding.png" alt="color"/>
                            </div>
                            <SegmentedControl
                                value={finishing} orientation={width <= 1024 ? "vertical" : "horizontal"}
                                size={width<= 1024? "lg":"sm"}
                                onChange={setFinishing} fullWidth withItemsBorders={true} radius="md"
                                data={['Профлист цветной', 'Профлист оцинковка', 'Металический сайдинг']}/>
                        </div>
                        <Group justify="space-between" mt="md">
                            <Button variant="default" size='lg' loading={isLoading}
                                    onClick={(backHandler)}>Назад</Button>
                            <Button variant="fill" size='lg' loading={isLoading}
                                    onClick={(nextHandler)}>Далее</Button>
                        </Group>
                    </div>
                </div>
                <div className={active == 2 ? activeStyleQuiz : inActiveStyleQuiz}>
                    <div className="flex flex-col gap-4 h-full justify-between">

                            <h2 className='mb-8 text-2xl font-bold'>ОТДЕЛКА ВНУТРИ</h2>
                        <div>
                            <div className={width<=1024 ? 'hidden text-lg':''}>
                                <div className='flex justify-between px-2 mb-5'>
                                    <img className=" rounded-3xl" src="./img/osp.png" alt="color"/>
                                    <img className="rounded-3xl" src="./img/plastic.png" alt="color"/>
                                    <img className="rounded-3xl" src="./img/vagonka.png" alt="color"/>
                                    <img className="rounded-3xl" src="./img/colorProf.png" alt="color"/>
                                </div>
                            </div>
                            <SegmentedControl value={outFinishing}
                                              orientation={width <= 1024 ? "vertical" : "horizontal"}
                                              size={width<= 1024? "lg":"sm"}
                                              onChange={setOutFinishing} fullWidth withItemsBorders={true} radius="md"
                                              data={['ОСП 19мм', 'Пластиковые панели', 'Вагонка 14мм', 'Профлист цветной']}/>
                        </div>
                        <Group justify="space-between" mt="md">
                            <Button variant="default" size='lg' loading={isLoading}
                                    onClick={(backHandler)}>Назад</Button>
                            <Button variant="fill" size='lg' loading={isLoading}
                                    onClick={(nextHandler)}>Далее</Button>
                        </Group>
                    </div>
                </div>
                <div className={active == 3 ? activeStyleQuiz : inActiveStyleQuiz}>
                    <div className="flex flex-col gap-4 h-full justify-between">
                        <div>
                            <h2 className='mb-8 text-2xl font-bold'>КОЛИЧЕСТВО ОКОН</h2>
                            <NumberInput
                                value={windows}
                                onChange={setWindows}
                                defaultValue={2}
                                size="xl"
                                min={2}
                                max={5}
                                placeholder="Введите количество окон"
                            />
                        </div>
                        <Group justify="space-between" mt="md">
                            <Button variant="default" size='lg' loading={isLoading}
                                    onClick={(backHandler)}>Назад</Button>
                            <Button variant="fill" size='lg' loading={isLoading}
                                    onClick={(nextHandler)}>Далее</Button>
                        </Group>
                    </div>
                </div>
                <div className={active == 4 ? activeStyleQuiz : inActiveStyleQuiz}>
                    <div className="flex flex-col gap-4 h-full justify-between">
                        <div>
                            <h2 className='mb-8 text-2xl font-bold'>РАЗМЕР ОКОН</h2>


                            <Radio.Group value={windowsSize} onChange={setWindowsSize} defaultValue={'110x70'}>
                                <Radio size='md' className='mt-8' value="50x70" label="50x70 см"/>
                                <Radio size='md' className='mt-8' value="110x70" label="110x70 см"/>
                                <Radio checked size='md' className='mt-8' value="90x90" label="90x90 см"/>
                                <Radio size='md' className='mt-8' value="120x120" label="120x120 см"/>
                            </Radio.Group>


                        </div>
                        <Group justify="space-between" mt="md">
                            <Button variant="default" size='lg' loading={isLoading}
                                    onClick={(backHandler)}>Назад</Button>
                            <Button variant="fill" size='lg' loading={isLoading}
                                    onClick={(nextHandler)}>Далее</Button>
                        </Group>
                    </div>
                </div>
                <div className={active == 5 ? activeStyleQuiz : inActiveStyleQuiz}>
                    <div className="flex flex-col gap-4 h-full justify-between">
                        <div>
                            <h2 className='mb-8 text-2xl font-bold'>НУЖНА ЛИ ЭЛЕКТРИКА?</h2>
                            <Radio.Group value={electric} onChange={setElectric} defaultValue={'С электрикой'}>
                                <Radio size='md' className='mt-8' value="Без электрики"
                                       label="Электрику проводить не нужно"/>
                                <Radio size='md' className='mt-8' value="С электрикой"
                                       label="Нужна электрика под ключ"/>
                            </Radio.Group>


                        </div>
                        <Group justify="space-between" mt="md">
                            <Button variant="default" size='lg' loading={isLoading}
                                    onClick={(backHandler)}>Назад</Button>
                            <Button variant="fill" size='lg' loading={isLoading}
                                    onClick={(nextHandler)}>Далее</Button>
                        </Group>
                    </div>
                </div>
                <div className={active == 6 ? activeStyleQuiz : inActiveStyleQuiz}>
                    <div className='flex justify-between flex-col h-full'>
                        <h2 className='mb-3 text-2xl font-bold'>ПОСЛЕДНИЙ ШАГ</h2>
                        <form onSubmit={form.onSubmit(handleSumbmit)}>
                            <div className='flex flex-col gap-2 sm:gap-10 h-full justify-between '>
                                <div className='flex flex-col gap-4'>
                                    <TextInput
                                        size='md'
                                        required
                                        placeholder="Введите имя"
                                        key={form.key('name')}
                                        {...form.getInputProps('name')}
                                    />
                                    <TextInput
                                        size='md'
                                        required
                                        placeholder="Ваш номер телефона"
                                        defaultValue={'+7'}
                                        key={form.key('number')}

                                        {...form.getInputProps('number')}
                                    />
                                    <Checkbox

                                        required

                                        label="Нажимая “Отправить”, вы даете согласие на обработку
персональных данных в соответствии с политикой конфиденциальности
и принимаете условия пользовательского соглашения."
                                        key={form.key('termsOfService')}
                                        {...form.getInputProps('termsOfService', {type: 'checkbox'})}
                                    />
                                </div>
                                <Group justify="space-between" mt="md">
                                    <Button variant="default" size='lg'
                                            onClick={(backHandler)}>Назад</Button>
                                    {/*<Button variant="default" size='lg' loading={isLoading}*/}
                                    {/*        onClick={(notification)}>Назад</Button>*/}
                                    <Button variant="fill" size='lg' loading={isLoading}
                                            type="submit">Отправить</Button>
                                </Group>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </MantineProvider>


    );
}