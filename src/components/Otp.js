import Button from './button';
import InputEmail from './inputText';
import TextBox from './textBox';
import InputPin from './inputPin';

const Otp = ({ OtpLink }) => {
    return ( 
        <div className="flex items-center justify-center min-h-screen 2xl:justify-start">
            <div className="w-full max-w-lg p-6 rounded-lg">
                <div className="mb-6">
                    <p className="text-lg font-medium text-gray-800">Stay Secured</p>
                    <h2 className="text-xl font-bold text-gray-900">Choose a transaction PIN</h2>
                </div>

                <form className='pt-10 flex flex-col gap-4'>
                    <div className="pin-inputs">
                        <InputPin />
                        <InputPin />
                        <InputPin />
                        <InputPin />
                    </div>
                    <div className="flex justify-center">
                        <Button onClick={OtpLink} color="primary">Continue</Button>
                </div>
              </form>
            </div>
        </div>
    );
};

export default Otp;
