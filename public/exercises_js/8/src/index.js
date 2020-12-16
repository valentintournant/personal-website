import {startLoader, stopLoader} from "./helpers.js";
import {Backend} from "./backend.js";

const GithubAPI  = new Backend;

GithubAPI.setBaseUrl("https://api.github.com/");

const form = document.querySelector("#repos-form");
const username = document.querySelector("#github-username");
const button = document.querySelector("#get-repos");
const list = document.querySelector("#list");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    startLoader(button);
    GithubAPI.get(`users/${username.value}/repos`)
    .then(data => {
        let html = '';
        data.forEach(repo => {
            html += `<li>
                <a href="${repo.html_url}" target="_blank">
                    <h2>${repo.full_name}</h2>
                    <p>${repo.description}</p>
                </a>
            </li>`;
        });
        // we want to completely replace old <li>s
        list.innerHTML = html;
    })
    .finally(() => {
        stopLoader(button, "Get repositories");
    });
});