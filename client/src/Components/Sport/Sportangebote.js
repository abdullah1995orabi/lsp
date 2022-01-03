import React, { Component } from 'react'
import { toast } from "react-toastify";

export default class Sportangebote extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: {
            sportartname: "",
            beschreibung:"",
            anfangsdatum:"",
            enddatum:"",
            geraete: "",
          },
          redirect: false,
          errors: {},
        };
        this.hinzuhandler = this.hinzuhandler.bind(this);
  }
  validate(data) {
    let error = {};
    if (!data.sportname) error.sportname = "sportname is required!";
    if (!data.anfangsdatum) error.anfangsdatum = "anfangsdaum is required!";
    if (!data.enddatum) error.enddatum = "anfangsdaum is required!";
    if (!data.beschreibung) error.beschreibung = "anfangsdaum is required!";
    if (!data.geraete) error.geraete = "anfangsdaum is required!";




    return error;
  }

  hinzuhandler(e) {
    let errors = this.validate(this.state.data);
    this.setState({ errors: errors });

    if (Object.keys(errors).length === 0) {
      this.props
        .loginAction(this.state.data)
        .then((data) => {
          toast(data.message);
          this.setState({ redirect: true });
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    }
  }
    render() {
        return (
            <div>
                <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Sportart:
      <input
          onChange={(e) =>
            this.setState({
              data: { ...this.state.data, sportartname: e.target.value },
            })
          }
          type="text"
          placeholder="name"
          name="spname"
          id="spname"
          required
        />
      </th>

      
    </tr>
    <tr>
      <th scope="col">Beschreibung:
      <input
          onChange={(e) =>
            this.setState({
              data: { ...this.state.data, beschreibung: e.target.value },
            })
          }
          type="text"
          placeholder="Kurs Beschreibung"
          name="spname"
          id="spname"
          required
        />
      </th>

      
    </tr>
    <tr>
      <th scope="col">Datum :
      <input
          onChange={(e) =>
            this.setState({
              data: { ...this.state.data, anfangsdatum: e.target.value },
            })
          }
          type="text"
          placeholder="von"
          name="spname"
          id="spname"
          required
        />
        <input
          onChange={(e) =>
            this.setState({
              data: { ...this.state.data, enddatum: e.target.value },
            })
          }
          type="text"
          placeholder="bis"
          name="spname"
          id="spname"
          required
        />
      </th>

      
    </tr>

    <tr>
      <th scope="col">Geräte:
      <input
          onChange={(e) =>
            this.setState({
              data: { ...this.state.data, geraete: e.target.value },
            })
          }
          type="text"
          placeholder="Geräten Name"
          name="spname"
          id="spname"
          required
        />
      </th>

      
    </tr>
 
  
    
    
    
    </thead>
</table>
<button className="registerbtn">
          Sportart hinzufügen 
        </button>

                
            </div>
        )
    }
}
