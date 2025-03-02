<div class="bangdieukhien">
    <?php
        if($_SESSION['user']['name']){
    ?>
    <p>Xin chào <?=$_SESSION['user']['name']?></p>
    <?php    
        }
    ?>
</div>