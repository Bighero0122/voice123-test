import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { ActorImage, ActorLink, AudioPlayer } from "./VoiceActorCard.styles";
import { getAvatarUrl, highlightSearchTerm } from "../../utils/helpers";

const VoiceActorCard = ({ actor, searchTerm }) => {
  const { username, name } = actor.user;
  const { relevant_sample } = actor;
  const avatarUrl = getAvatarUrl(actor.user);
  const highlightedText = highlightSearchTerm(actor, searchTerm);

  //This is a sample url because other urls need the auth.
  const sampleUrl = encodeURI(
    "https://sandbox.voice123.com/samples/luis -  lalaa lalala la.mp3"
  );

  return (
    <Card sx={{ my: 2 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <ActorImage
              src={avatarUrl}
              alt={name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://ui-avatars.com/api/?name=Voice&background=random";
              }}
            />
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h6">
              <ActorLink
                href={`https://voice123.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </ActorLink>
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: highlightedText }} />
            {relevant_sample && (
              <AudioPlayer controls>
                <source src={sampleUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </AudioPlayer>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default VoiceActorCard;
