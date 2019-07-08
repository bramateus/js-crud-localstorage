<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/list-style.css">
<link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

<!DOCTYPE html>
<html>
<head>

    
    <title>Leanwork CRUD</title>
</head>

<body onload="Listar()">



<div class="container">
    <div class="box">
        <div class="col-md-12">
            <div class="row" style="display: inherit;">
                <h2 style="display: inline;">Lista</h2>
                <a class="btn-custom" href="../js-crud-localstorage">Cadastrar</a>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <!-- <th><input type="checkbox" ng-model="checkAll"></th> -->
                <th>ID</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>Telefone</th>
                <th>Email</th>
                <!-- <th>Created Time</th> -->
                <th></th>
                <th></th> 
            </thead>
            <tbody>

            </tbody>
        </table>



    </div>
</div>


<script src="https://code.jquery.com/jquery-3.4.0.min.js" integrity="sha256-BJeo0qm959uMBGb65z40ejJYGSgR7REI4+CW1fNKwOg=" crossorigin="anonymous"></script>
<script type="text/javascript" src="js/app.js"></script>


</body>
</html>