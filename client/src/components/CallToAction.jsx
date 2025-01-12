import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-xl space-y-2">
          <p> एक और शख़्स छोड़कर चला गया तो क्या हुआ</p> 
          <p>हमारे साथ कौन सा ये पहली मर्तबा हुआ। </p>
          <p> अज़ल से इन हथेलियों में हिज्र की लकीर थी</p>
          <p>तुम्हारा दुःख तो जैसे मेरे हाथ में बड़ा हुआ</p>
          <p>मेरे खिलाफ दुश्मनों की सफ़ में है वो और मैं </p>
          <p>बहुत बुरा लगूँगा उस पर तीर खींचता हुआ</p>
        </h2>
        <p className="text-gray-500 my-2">Lets Connect</p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://rahul87654.github.io/Portfolio-Rahul/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mine Portfolio website to Checkout
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://res.cloudinary.com/dmmdqqvdl/image/upload/v1736661893/20241008_175941_ojbv2x.jpg" />
      </div>
    </div>
  );
}
