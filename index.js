 // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        //76
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        // 84
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        //78
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        //67
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        //59
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        //70
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        //89
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        //81
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        //37
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        //50
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        //90
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
        //83
      ];

      const people = [
        'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
        'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
        'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
        'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
        'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
      ];

      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
        const inventeurBorn = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <1600);
        console.log("Born in 1500's")
        console.log(inventeurBorn);

      // Array.prototype.map()
      // 2. Give us an array of the inventors first and last names
      const firstLast = inventors.map(inventor => `${inventor.first}  ${inventor.last}`)
      console.log("Names of ");
      console.log(firstLast);


      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
      const trieBirth = inventors.sort((young, old) => young.year - old.year)

      console.log(trieBirth);

      // Array.prototype.reduce()
      // 4. How many years did all the inventors live all together?
      const initialValue = 0;
      const livetogeth = inventors.reduce((all,inventor) => all + (inventor.passed - inventor.year),initialValue )
      console.log(livetogeth);

      // 5. Sort the inventors by years lived
      const trieAge = inventors.sort((a,b) => (a.passed - a.year) - (b.passed - b.year));
      console.log(trieAge);

      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      const boulevards = ['Boulevards of Paris', 'City walls of Paris', 'Thiers wall', 'Wall of Charles V', 'Wall of Philip II Augustus', 'City gates of Paris', "Haussmann's renovation of Paris", 'Boulevards of the Marshals', 'Boulevard Auguste-Blanqui', 'Boulevard Barbès', 'Boulevard Beaumarchais', "Boulevard de l'Amiral-Bruix", 'Boulevard Mortier', 'Boulevard Poniatowski', 'Boulevard Soult', 'Boulevard des Capucines', 'Boulevard de la Chapelle', 'Boulevard de Clichy', 'Boulevard du Crime', "Boulevard du Général-d'Armée-Jean-Simon", 'Boulevard Haussmann', "Boulevard de l'Hôpital", 'Boulevard des Italiens', 'Boulevard Lefebvre', 'Boulevard de la Madeleine', 'Boulevard de Magenta', 'Boulevard Malesherbes', 'Boulevard Marguerite-de-Rochechouart', 'Boulevard Montmartre', 'Boulevard du Montparnasse', 'Boulevard Raspail', 'Boulevard Richard-Lenoir', 'Boulevard Saint-Germain', 'Boulevard Saint-Michel', 'Boulevard de Sébastopol', 'Boulevard de Strasbourg', 'Boulevard du Temple', 'Boulevard Voltaire', 'Boulevard de la Zone']
      
      const wikiboul = boulevards.filter(boulevard  => boulevard.includes('de '))


      console.log(wikiboul);

      // 7. sort Exercise
      // Sort the people alphabetically by last name
        const sortPeople = people.sort((a,b) =>{
          const [aLast,aFirst] = a.split(", ");
          const [bLast,bfirst] = b.split(", ");
          return aLast < bLast ? -1 : 1;
        } )
      console.log(sortPeople);

      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

        const vehiculeNumbers = {};
        for (let item of data) {
          vehiculeNumbers[item] = (vehiculeNumbers[item] || 0)   + 1;
        }
        console.log(vehiculeNumbers);


        // ## Array Cardio Day 2

    const peoples = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
      const least = peoples.some(age => (2023 - age.year) >= 19)
      console.log(least);

    // Array.prototype.every() // is everyone 19 or older?
    const everyone = peoples.every(age => (2023 - age.year) >= 19)
    console.log(everyone);
    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for 
    // find the comment with the ID of 823423
    const trouver = comments.find(comment => comment.id === 823423 )
    console.log(trouver);

    // Array.prototype.findIndex()
    // Find the comment with this ID
    const trouvers = comments.findIndex((comment) =>  comment.id === 823423 )
    console.log(trouvers);
    

    const supr = comments.filter(item => item.id !== 823423)
    console.log(supr)
    // delete the comment with the ID of 823423