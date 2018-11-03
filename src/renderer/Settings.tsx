/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

const users = [
  { id : 1, name : "Andrew Wilson",  img: "http://admin.lightsinthesky.io/dist/images/5.png", title : "UI / UX Developer"},
  { id : 2, name : "Noah Wilson",  img: "http://admin.lightsinthesky.io/dist/images/7.png", title : "UI / UX Developer"},
  { id : 3, name : "Mark Wilson",  img: "http://admin.lightsinthesky.io/dist/images/8.png", title : "UI / UX Developer"},
  { id : 4, name : "Frak Wilson",  img: "http://admin.lightsinthesky.io/dist/images/img3.jpg", title : "UI / UX Developer"},
  { id : 5, name : "Bob Wilson",  img: "http://admin.lightsinthesky.io/dist/images/avatar.png", title : "UI / UX Developer"},
  { id : 6, name : "Esther Wilson",  img: "http://admin.lightsinthesky.io/dist/images/7.png", title : "UI / UX Developer"},
  { id : 7, name : "John Wilson",  img: "http://admin.lightsinthesky.io/dist/images/avatar.png", title : "UI / UX Developer"}
];
export class Settings extends React.Component<any, any>  {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
          <div className="main-content">
            <div className="main-content-container">
              <div className="card-container-settings secondary-container">
                <div className="card-space">
                  <div className="card-container-settings ">
                    <div className="col-8">
                      <div className="c-card">
                        Content
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="c-card">

                      {
                        users.map((user, i) => {
                          return (
                            <article className="comment-item">
                              <a className="pull-left thumb-sm m-r-sm">
                                <img src={user.img} className="img-circle" />
                              </a>
                              <section className="comment-body">
                                <header>
                                  <a href="#"><strong>{user.name}</strong></a>
                                </header>
                                <div className="text-muted">{user.title}</div>
                              </section>
                            </article>
                          )
                        })
                      }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
    }
  }
