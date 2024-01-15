const questions = [  [
    { name: 'scratch',
      question: [                                                       // 0 
        'saf','safsaf','safsafsafas','safkugwqfakfsajfbsaf'
      ]}
      


      ,
      {
        name: 'sql',
        question: [
            'safsaf','saf','saf safsafas','safkugwqfak'                 // 1
        ]
      }
]  ];
for(let i = 0; i < 9 ; i++){
    let currentQuestion = questions[i][Math.floor(Math.random() * 6)];
}
