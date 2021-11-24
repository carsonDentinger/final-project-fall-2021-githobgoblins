package GitHobGoblins.FinalPJ.model;


import javax.persistence.*;

@Entity
public class PlayerCharacter {

    @Id
    @GeneratedValue
    private Long id;


    @ManyToOne
    private Ability ability;

    @ManyToOne
    private Background background;

    @OneToOne
    private BaseFeatures baseFeatures;

    @ManyToOne
    private DNDClass dndClass;

    @ManyToOne
    private Race race;

    public PlayerCharacter(Ability ability, Background background, BaseFeatures baseFeatures, DNDClass dndClass, Race race) {
        this.ability = ability;
        this.background = background;
        this.baseFeatures = baseFeatures;
        this.dndClass = dndClass;
        this.race = race;
    }

    public PlayerCharacter(){
        //zero argument const.
    }

    public Long getId() {
        return id;
    }

    public Ability getAbility() {
        return ability;
    }

    public Background getBackground() {
        return background;
    }

    public BaseFeatures getBaseFeatures() {
        return baseFeatures;
    }

    public DNDClass getDndClass() {
        return dndClass;
    }

    public Race getRace() {
        return race;
    }

    public void changeBase(BaseFeatures base){
        this.baseFeatures=base;
    }
    public void changeAbilty(Ability ability){
        this.ability =ability;
    }
    public void changeBackground(Background background){
        this.background=background;
    }
    public void changeClass(DNDClass dndClass){
        this.dndClass=dndClass;
    }
    public void changeRace(Race race){
        this.race=race;
    }
}