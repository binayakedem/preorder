import React from 'react'
import Image2 from '../img/img2.png'
import I6 from '../image/laal-maans.png'
import I7 from '../image/madras-curry.png'
import I8 from '../image/mirchi-ka-koota.png'
import I9 from '../image/mirchi-ka-salan-2.png'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Home = () => {
  const navigate=useNavigate();
  const handleNav=()=>{
    navigate('/item')
  }

  return (<>
  <Navbar/>
  
  
    <div className='container bg-black bg-gradient'>
      <div className="row">
        <div className="col-6" >
          <div className="row pt-5">
            <div className="col-12 p-5">
              <h1 className='text-white pt-5'>Pre-Order Tasty and</h1>
              <h1 className='text-white'> Fresh Food</h1>
              <h1 className='text-danger'>Anytime!</h1>
              
            </div>
          </div>
          <div className="row">
            <div className="col-12">
            <button onClick={handleNav} className="mx-5 btn btn-primary">More...</button>
            </div>
          </div>
        </div>
        <div className="col-6">
          <img src={Image2}  alt="food item" className='img-fluid p-5 mt-5'/>

        </div>
      </div>
      <div className="row my-5 py-5" >
        <div className="col-3 p-3">

        <div className="card">
  <img src={I6} className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">laal-maans</h5>
    <p className="card-text">The name itself is enough to make our mouth water. Laal Maans, as the name suggests is a meat curry prepared in a tantalizing gravy of masalas and red chilies.</p>
    <button onClick={handleNav} className="btn btn-primary">More...</button>
  </div>
</div>

        </div>
        <div className="col-3 p-3">
        <div className="card">
  <img src={I7} className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">madras-curry</h5>
    <p className="card-text">The main ingredient of this South Indian dish is Chilli powder. This hot and spicy curry is the result of the mixture of meat, garlic, turmeric, pepper, coriander, cumin and lots of chilli. The dish is a pure delight for all spicy food lovers. This curry is made with chicken, pork and even lamb.</p>
    <button onClick={handleNav} className="btn btn-primary">More...</button>
  </div>
</div>
        </div>
        <div className="col-3 p-3">
        <div className="card">
  <img src={I8} className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">mirchi-ka-koota</h5>
    <p className="card-text">Mirchi Ka Koota is a traditional Rajasthani dish which is prepared with hot green chilies.  The chilies are cooked with hot spices like turmeric and amchur powder with milk and a little sugar.</p>
    <button onClick={handleNav} className="btn btn-primary">More...</button>
  </div>
</div>
        </div>
        <div className="col-3 p-3">
        <div className="card">
  <img src={I9} className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">mirchi-ka-salan-2</h5>
    <p className="card-text">This flavorful Mirchi Ka Salan is an eminent Hyderabadi curry made of peanut and green chilies.  This lip-smacking Salan accompanies Biryani all over India.</p>
    <button onClick={handleNav} className="btn btn-primary">More...</button>
  </div>
</div>
        </div>
      </div>


    </div>
    {/* <div className="container bg-light">
      <h1>Tasty and Healthy food</h1>
      <p>


     <p className='fs-4'> 1. Apples</p>
     <br />
Apples are high in fiber, vitamin C, and numerous antioxidants. They are very filling and make the perfect snack if you find yourself hungry between meals.


<p className='fs-4'> 2.Avocados</p>
     <br />
Avocados are different from most other fruits because they’re loaded with healthy fats instead of carbs. They are not only creamy and tasty but also high in fiber, potassium, and vitamin C.


<p className='fs-4'> 3. Bananas</p>
     <br />
Bananas are among the world’s best sources of potassium. They’re also high in vitamin B6 and fiber and are convenient and portable.


<p className='fs-4'>4. Blueberries</p>
     <br />
Blueberries are not only delicious but also among the most powerful sources of antioxidants in the world.


<p className='fs-4'> 5. Oranges</p>
     <br />
Oranges are well known for their vitamin C content. What’s more, they’re high in fiber and antioxidants.


<p className='fs-4'>6. Strawberries</p>
     <br />
Strawberries are highly nutritious and low in both carbs and calories.

They’re loaded with vitamin C, fiber, and manganese and are arguably among the most delicious foods in existence.

Other healthy fruits
Other healthy fruits and berries include cherries, grapes, grapefruit, kiwi, lemons, mangoes, melons, olives, peaches, pears, pineapples, plums, and raspberries.



<p className='fs-4'> 7. Eggs</p>
     <br />
Eggs are among the most nutritious foods on the planet.

They were previously demonized for being high in cholesterol, but new studies show that they’re perfectly safe and healthy (1Trusted Source, 2Trusted Source).


<p className='fs-4'> 8–10: Meats</p>
     <br />
Lean, unprocessed meats can be included in a healthy diet.


<p className='fs-4'> 8. Lean beef</p>
     <br />
Lean beef is among the best sources of protein when consumed in moderation and is loaded with highly bioavailable iron.


<p className='fs-4'> 9. Chicken breasts</p>
     <br />
Chicken breast is low in fat and calories but extremely high in protein. It’s a great source of many nutrients. Again, feel free to eat fattier cuts of chicken if you’re not eating many carbs.


<p className='fs-4'> 10. Lamb</p>
     <br />
Lambs are usually grass-fed, and their meat tends to be high in omega-3 fatty acids.


<p className='fs-4'> 11–15: Nuts and seeds</p>
     <br />
Despite being high in fat and calories, nuts and seeds may aid in weight loss (3Trusted Source, 4Trusted Source).

These foods are crunchy, filling, and loaded with important nutrients that many people don’t get enough of, including magnesium and vitamin E.

They also require almost no preparation, so they’re easy to add to your routine.

Some people develop nut allergies as they grow older. If you have a reaction after eating any kind of nut, eliminate it from your diet.


<p className='fs-4'> 11. Almonds</p>
     <br />
Almonds are a popular nut loaded with vitamin E, antioxidants, magnesium, and fiber. Studies show that almonds can contribute to weight loss and improve metabolic health (5Trusted Source).


<p className='fs-4'> 12. Chia seeds</p>
     <br />
Chia seeds are among the most nutrient-dense foods on the planet. A single ounce (28 grams) packs 11 grams of fiber and significant amounts of magnesium, manganese, calcium, and various other nutrients.


<p className='fs-4'> 13. Coconuts</p>
     <br />
Coconuts are loaded with fiber and powerful fatty acids called medium-chain triglycerides (MCTs).


<p className='fs-4'> 14. Macadamia nuts</p>
     <br />
Macadamia nuts are very tasty. They’re much higher in monounsaturated fats and lower in omega-6 fatty acids than most other nuts.

<p className='fs-4'> 15. Walnuts</p>
     <br />
Walnuts are highly nutritious and loaded with fiber and various vitamins and minerals.


<p className='fs-4'> 16. Brazil nuts</p>
     <br />
Brazil nuts have a smooth, buttery texture; are loaded with nutrients; are beneficial for thyroid function; and are one of the best sources of the important mineral selenium.


<p className='fs-4'> 17–26: Vegetables</p>
     <br />
Calorie for calorie, vegetables are among the world’s most concentrated sources of nutrients.

There’s a wide variety available, and it’s best to eat many different types every day.


<p className='fs-4'> 17. Asparagus</p>
     <br />
Asparagus is a popular vegetable that is low in both carbs and calories but loaded with vitamin K.


<p className='fs-4'> 18. Bell peppers</p>
     <br />
Bell peppers come in several colors, including red, yellow, and green. They’re crunchy and sweet and are a great source of antioxidants and vitamin C.


<p className='fs-4'>19. Broccoli</p>
     <br />
Broccoli is a cruciferous vegetable that tastes great both raw and cooked. It’s an excellent source of fiber and vitamins C and K and contains a decent amount of protein compared with other vegetables.


<p className='fs-4'>20. Carrots</p>
     <br />
Carrots are a popular root vegetable. They’re extremely crunchy and loaded with nutrients such as fiber and vitamin K.

Carrots are also very high in carotene antioxidants, which have numerous benefits.


<p className='fs-4'> 21. Cauliflower</p>
     <br />
Cauliflower is a very versatile cruciferous vegetable. It can be used to make a multitude of healthy dishes and also tastes good on its own.


<p className='fs-4'> 22. Cucumber</p>
     <br />
Cucumbers are one of the world’s most popular vegetables. They’re very low in both carbs and calories, consisting mostly of water. However, they contain a number of nutrients in small amounts, including vitamin K.


<p className='fs-4'> 23. Garlic</p>
     <br />
Garlic is incredibly healthy. It contains bioactive organosulfur compounds that have powerful biological effects, including improved immune function (6Trusted Source).


<p className='fs-4'> 24. Kale</p>
     <br />
Kale has become increasingly popular because it’s incredibly high in fiber, vitamins C and K, and a number of other nutrients. It adds a satisfying crunch to salads and other dishes.


<p className='fs-4'> 25. Onions</p>
     <br />
Onions have a very strong flavor and are very popular in many recipes. They contain a number of bioactive compounds believed to have health benefits.


<p className='fs-4'> 26. Tomatoess</p>
     <br />
Tomatoes are usually categorized as a vegetable, although they are technically a fruit. They are tasty and loaded with nutrients such as potassium and vitamin C.

More healthy vegetables
Most vegetables are very healthy. Others worth mentioning are artichokes, Brussels sprouts, cabbage, celery, eggplant, leeks, lettuce, mushrooms, radishes, squash, Swiss chard, turnips, and zucchini.



<p className='fs-4'>27–32: Fish and seafood</p>
     <br />
Fish and other seafood tend to be very healthy and nutritious.

They’re especially rich in omega-3 fatty acids and iodine, two nutrients that most people don’t consume enough of.

Studies show that people who eat the highest amounts of seafood — especially fish — tend to live longer and have a lower risk of many illnesses, including heart disease, dementia, and depression (7Trusted Source, 8, 9Trusted Source).


<p className='fs-4'> 27. Salmon</p>
     <br />
Salmon is a type of oily fish that’s incredibly popular because of its excellent taste and high nutrient content, including protein and omega-3 fatty acids. It also contains some vitamin D.


<p className='fs-4'> 28. Sardines</p>
     <br />
Sardines are small, oily fish that are among the most nutritious foods you can eat. They boast sizable amounts of most nutrients that your body needs, including calcium and vitamin D.


<p className='fs-4'> 29. Shellfish</p>
     <br />
Shellfish ranks similarly to organ meats when it comes to nutrient density. Edible shellfish include clams, mollusks, and oysters.


<p className='fs-4'>30. Shrimp</p>
     <br />
Shrimp is a type of crustacean related to crabs and lobsters. It tends to be low in fat and calories but high in protein. It’s also loaded with various other nutrients, including selenium and vitamin B12.


<p className='fs-4'>31. Trout</p>
     <br />
Trout is another type of delicious freshwater fish, similar to salmon.


<p className='fs-4'> 32. Tuna</p>
     <br />
Tuna is very popular in Western countries and tends to be low in fat and calories and high in protein. It’s perfect for people who need to add more protein to their diets but keep calories low.

However, you should make sure to buy low mercury varieties.


<p className='fs-4'> 33–35: Grains</p>
     <br />
Whole grains are an important addition to your diet because they provide a variety of micronutrients and fiber and are fuel for your body.

Just keep in mind that they’re relatively high in carbs, so they’re not recommended for those who are on low carb diets.


<p className='fs-4'> 33. Brown rice</p>
     <br />
Rice is one of the most popular cereal grains and is currently a staple food for more than half the world’s population. Brown rice is fairly nutritious, with decent amounts of fiber, vitamin B1, and magnesium.


<p className='fs-4'> 34. Oats</p>
     <br />
Oats are incredibly healthy. They’re loaded with nutrients and powerful fibers called beta glucans, which provide numerous benefits, including helping to lower cholesterol and feed beneficial bacteria in the gut.


<p className='fs-4'> 35. Quinoa</p>
     <br />
Quinoa has become incredibly popular among health-conscious people in recent years. It’s a tasty grain that’s high in nutrients such as fiber and magnesium. It is also an excellent source of plant-based protein.


<p className='fs-4'>36–37: Breads</p>
     <br />
Many people eat a lot of highly processed white bread.

If you are trying to adopt a healthier diet, it’s helpful to compare product labels and choose the bread with the most dietary fiber and the least added sugar.


<p className='fs-4'> 36. Ezekiel bread</p>
     <br />
Ezekiel bread may be the healthiest bread you can buy. It’s made from organic sprouted whole grains, as well as several legumes.

Overall, the best choice for bread may one you can make yourself. Here’s a list of 15 recipes for gluten-free, low carb breads.


<p className='fs-4'>38–41: Legumes</p>
     <br />
Legumes are a great plant-based source of protein, iron, and fiber.

While it’s true that legumes contain antinutrients, which can interfere with digestion and nutrient absorption, it’s possible to reduce or eliminate antinutrient content by soaking and properly preparing them (10Trusted Source).

Therefore, legumes are a great plant-based source of protein.


<p className='fs-4'>38. Green beans</p>
     <br />
Green beans, also called string beans, are an unripe variety of the common bean. They are very popular in Western countries.


<p className='fs-4'> 39. Kidney beans</p>
     <br />
Kidney beans are loaded with fiber and various vitamins and minerals. Make sure to cook them properly, because they’re toxic when raw.


<p className='fs-4'>40. Lentils</p>
     <br />
Lentils are another popular legume. They’re high in fiber and are among the best sources of plant-based protein.


<p className='fs-4'> 41. Peanuts</p>
     <br />
Peanuts (which are legumes, not true nuts) are incredibly tasty and high in nutrients and antioxidants. Several studies suggest that peanuts can aid in weight loss (11Trusted Source, 12Trusted Source).

However, if you’re monitoring your calorie intake, you may want to be mindful of your consumption of peanut butter, which is very high in calories and easy to eat in large amounts.

      </p>

    </div> */}
    </>
  )
}

export default Home