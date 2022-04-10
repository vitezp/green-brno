import React from 'react'
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export const HowToHelp = () => {
    const classes = useStyles();
    return (
        <>
            <Container style={{
                width: '100%',
                marginTop: '80px',
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <Card className={classes.root} style={{ position: 'relative'}}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/images/mestska-zelen.jpg"
                            title="Příroda"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Městská zeleň
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Neustále rozšiřujeme plochy zeleně na území města a myslíme na ně i v územních plánech.
                                Revitalizujeme parky a zapojili jsme se i do projektu Sázíme budoucnost.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{ position: 'absolute', bottom: '10px'}}>
                        <Button size="small" href="https://www.vzmb.cz/" target="_blank">Více zde</Button>
                        <Button size="small" href="/heatMap">Zobraz mapu</Button>
                    </CardActions>
                </Card>
                <Card className={classes.root} style={{ position: 'relative'}}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/images/komunita.jpg"
                            title="Příroda"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Komunita
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Neustále rozšiřujeme plochy zeleně na území města a myslíme na ně i v územních plánech.
                                Revitalizujeme parky a zapojili jsme se i do projektu Sázíme budoucnost.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{ position: 'absolute', bottom: '10px'}}>
                        <Button size="small" href="https://ekodotace.brno.cz/dotace/ekologicka-vychova/"
                                target="_blank">Více zde</Button>
                    </CardActions>
                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/images/nakladani-s-energii.jpg"
                            title="Příroda"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Nakládání s energií
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Přijali jsme Územní energetickou koncepci (ÚEK), která stanovuje cíle a zásady nakládání
                                s energií na území statutárního města Brna a je mimo jiné velmi důležitá v plánování
                                zásobování centralizovaným teplem, nakládání s odpady a využívání obnovitelných zdrojů
                                energie. Na budovách ve vlastnictví města provozujeme efektivní energetický management.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" href="https://www.energybroker.cz/brno/" target="_blank">Více zde</Button>
                    </CardActions>
                </Card>
            </Container>
            <Container style={{
                width: '100%',
                marginTop: '50px',
                paddingBottom: '80px',
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/images/podpora-udrzitelne-dopravy.jpg"
                            title="Udržitelné zdroje"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Podpora udržitelné dopravy
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Podporujeme občany ve využívání městské hromadné dopravy formou dotace na šalinkartu a rozšiřujeme síť cyklostezek. Na silnicích podporujeme elektromobilitu, a to budováním veřejných nabíječek.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" href="https://www.teplarny.cz/cs/dobijecky-pro-elektromobily" target="_blank">Více zde</Button>
                    </CardActions>
                </Card>
                <Card className={classes.root} style={{ position: 'relative'}}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/images/recyklace.jpg"
                            title="Odpad"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Recyklace
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                NPředcházíme vzniku odpadů, který však díky naší společnosti SAKO dokážeme účinně sbírat, třídit a následně z něj v městské spalovně vyrábět energii.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{ position: 'absolute', bottom: '10px'}}>
                        <Button size="small" href="https://www.sako.cz/pro-brnaky/cz/801/energeticke-vyuziti-odpadu/"
                                target="_blank">Více zde</Button>
                    </CardActions>
                </Card>
                <Card className={classes.root} style={{ position: 'relative'}}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/images/vymena-osvetleni.png"
                            title="Žárovka"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Výměna osvětlení
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Ve spolupráci s Technickými sítěmi Brno jsme spustili výměnu veřejného osvětlení za LED osvětlení a postupně zavádíme i noční útlum světla.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{ position: 'absolute', bottom: '10px'}}>
                        <Button size="small" href="https://www.tsb.cz/sluzby/verejne-osvetleni-mesta-brna/" target="_blank">Více zde</Button>
                        <Button size="small" href="/lightsMap">Zobraz mapu</Button>
                    </CardActions>
                </Card>
            </Container>
        </>
    )
}
