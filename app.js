
var score,current,activePlayer,dice,gamePlaying;

init();


function btn()
{
   if(gamePlaying)
   {
        var current=document.querySelector('#current-'+activePlayer).textContent;
        dice=Math.floor(Math.random()*6)+1;

        current=Number(current)+dice;
        document.querySelector('.dice').style.display='block';
        document.querySelector('#current-' + activePlayer).textContent=current;
        document.querySelector('.dice').src='dice-'+dice+'.png';

        if(dice==1)
        {
            //document.querySelector('#score-'+activePlayer).textContent=0;
            document.querySelector('#current-'+activePlayer).textContent=0;
            
            activePlayer= activePlayer===0?1:0;

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            
            document.querySelector('.dice').style.display='none';
        
        }

   }
   
    
}

function btn2()
{
   if(gamePlaying)
   {
        
        var score;
        var current=document.querySelector('#current-'+activePlayer).textContent;
        score = document.querySelector('#score-'+activePlayer).textContent;
        score=Number(score)+Number(current);
        document.querySelector('#score-'+activePlayer).textContent=score;

        document.querySelector('#current-'+activePlayer).textContent=0;

        if(score>=20)
        {
            document.querySelector('#name-'+activePlayer).textContent='Winner!!!'
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            gamePlaying=false;
        }
        
        else
        {
            activePlayer= activePlayer===0?1:0;

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            
            document.querySelector('.dice').style.display='none';

            //document.querySelector('player-0-panel').classList.remove('active');
            //document.querySelector('player-1-panel').classList.add('active');
        }
   } 
    
    

}

document.querySelector('.btn-roll').addEventListener('click',btn);

document.querySelector('.btn-hold').addEventListener('click',btn2);

document.querySelector('.btn-new').addEventListener('click',init);

function init()
{
    score = [0,0];
    current=[0,0];
    activePlayer=0;

    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;
    document.querySelector('#score-0').textContent=0;
    document.querySelector('#score-1').textContent=0;
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('#name-0').textContent='Player 1';
    document.querySelector('#name-1').textContent='Player 2';
    gamePlaying=true;




}



