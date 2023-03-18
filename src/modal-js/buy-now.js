<div class="backdrop">
    <div class="modal-buy-now">
        <button type="button" class="btn-close-open">
            <svg width="24" height="24">
                <use href="./img/symbol-defs.svg#icon-close"></use>
            </svg>
        </button>
        <h1 class="header-modal-buy"><span class="acсent">BUY</span> NOW</h1>
        <ul class="list-chocolate-selection">
            <li>
                <div class="cont-chocolate-selection">
                    <img src="" srcset="" alt="" width="167" class="">
                    <button class="weight">
                        100 g
                    </button>
                </div>
            </li>
            <li>
                <div class="cont-chocolate-selection"></div>
            </li>
            <li>
                <div class="cont-chocolate-selection"></div>
            </li> 
        </ul>
        <form name="order" class="modal-order">
            <ul class="list-form">
                <li>
                    <div>
                        <p class="input-text"><label for="user_name">Personal information</label></p>
                        <ul class="eryrt">
                            <li class="item-form"><input id="user_name" type="text" class="modal-input" placeholder="Name" required ></li>
                            <li class="item-form"><input type="text" class="modal-input" placeholder="Surname" required ></li>
                        </ul>
                    </div>
                </li>
                 <li class="item-form">
                    <label for=""><span class="input-text">Personal information</span>
                        <input type="text" class="modal-input" placeholder="Name">
                        <input type="text" class="modal-input Surname" placeholder="Surname">
                    </label>
                    
                </li> 
                <li class="item-form">
                    <label for="user_email"><span class="input-text">Email</span>
                        <input id="user_email" type="email" class="modal-input" placeholder="Enter your email" required 
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
                    </label>
                </li>
                <li class="item-form">
                    <label for="user_phone"><span class="input-text">Phone number</span>
                        <input id="user_phone" type="tel" class="modal-input" placeholder="Phone number" required >
                    </label>
                </li>
                <li class="item-form">
                    <label for="user_card"><span class="input-text">Card number</span>
                        <input id="user_card" type="number"  class="modal-input" placeholder="Enter card" required>
                    </label>
                </li>
                <li>
                    <label for="comment">
                        <span class="input-text">Comment</span>
                        <textarea id="comment" class="comment-placeholder" name="comment-user" id=""  rows="4" placeholder="Enter text"></textarea>
                    </label>
                </li>
            </ul>
            <button type="submit" class="button-modal-buy">Submit</button>
    </div>
</div>