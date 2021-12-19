<div class="loading">
    <div class="content">
        <h1>Loading images...</h1>
        <p>Content will be available shortly.</p>
    </div>
</div>

<style>
    .loading {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height:100vh;
        z-index: 100;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #0d1117;
    }

    p {
        color: #ffffff;
    }

    h1 {
        color: #ffdf36;
    }

    @media screen and (max-width: 680px) {
        .loading {
            text-align: center;
            font-size: 16px;
            padding: 40px;
        }
    }
</style>