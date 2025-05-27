import React from 'react';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Kontakta Oss</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Kontaktuppgifter</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-1">Adress</h3>
              <p className="text-gray-600">
                Kattgatan 123<br />
                11122 Filmstaden<br />
                Sverige
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-1">Email</h3>
              <p className="text-gray-600">
                info@kino.se<br />
                support@kino.se
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-1">Telefon</h3>
              <p className="text-gray-600">
                +46 123 456 789<br />
                Måndag-Fredag: 09:00-17:00
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Skicka ett meddelande</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Namn</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ditt namn"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="din.email@exempel.se"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Meddelande</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Skriv ditt meddelande här..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Skicka
            </button>
          </form>
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Vanliga frågor</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Hur kan jag skriva en filmrecension?</h3>
            <p className="text-gray-600">
              Cat snacks meow to be let in leave hair everywhere, so run as fast as i can into another room for no reason. Meow loudly just to annoy owners cough furball hide when guests come over, yet mew mew do not try to mix old food with new one to fool me! Cat cat moo moo lick ears lick paws.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Kan jag bli en filmkritiker på Kino?</h3>
            <p className="text-gray-600">
              Eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap meow meow mama. Jump up to edge of bath, fall in then scramble in a mad panic to get out.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Hur ofta skickas nyhetsbrevet ut?</h3>
            <p className="text-gray-600">
              Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff purr when being pet cat slap dog in face. Eat a plant, kill a hand cough furball into food bowl then scratch owner for a new one.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Var kan jag rapportera ett tekniskt problem?</h3>
            <p className="text-gray-600">
              Cat snacks meowzer tickle my belly at your own peril i will pounce on you and claw and bite. Cuddle no cuddle cuddle love scratch scratch cat cat moo moo lick ears lick paws. Munch on tasty moths hiding behind the couch until lured out by a feathery toy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
