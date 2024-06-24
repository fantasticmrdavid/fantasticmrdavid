import React, { memo, useContext, useEffect, useState } from "react";
import { ScopeSpinner } from "components/ScopeSpinner/ScopeSpinner";
import { ImagePreloader } from "components/ImagePreloader/ImagePreloader";
import { Project } from "components/Project/Project";
import projects, { ProjectData } from "data/projects";
import { WorkLocationContext } from "contexts/WorkLocation";
import {
  Container,
  LoadingContainer,
  ProjectListContainer,
  SpinnerPlaceholder,
} from "./work.styles";

type WorkProps = { target?: string };

const getImages = () => {
  let images: string[] = [];

  projects.map((p: ProjectData) => {
    if (!!p.images) {
      const newImages = Object.keys(p.images).map(
        (key: string) => p.images[key]
      );
      images = [...images, ...newImages];
    }

    return p;
  });

  return images;
};

const getMedia = () =>
  projects.reduce((mediaList: string[], p: ProjectData) => {
    if (!p.media || p.media.length === 0) return mediaList;
    return [...mediaList, ...p.media.map((m) => m.thumbnail)];
  }, []);

const images = getImages();
const media = getMedia();

export const Work = memo((props: WorkProps) => {
  const { target } = props;
  const [isLoading, setIsLoading] = useState(true);
  const { setWorkLocation } = useContext(WorkLocationContext);

  useEffect(() => {
    if (target) setWorkLocation(target);
  }, [target]);

  return (
    <Container>
      <LoadingContainer $isLoading={isLoading}>
        {isLoading ? <ScopeSpinner /> : <SpinnerPlaceholder />}
        <ImagePreloader
          images={[...images, ...media]}
          completedAction={() => setIsLoading(false)}
        />
      </LoadingContainer>

      <ProjectListContainer $isLoading={isLoading} $hasTarget={!!target} $listSize={projects.length}>
        {projects.map((p: ProjectData, index) => {
          const isLast = index === projects.length - 1;
          const isFirst = index === 0;
          return (
            <Project
              {...p}
              key={`Project_${p.target}`}
              isParentLoading={isLoading}
              nextProject={projects[isLast ? 0 : index + 1]}
              previousProject={
                projects[isFirst ? projects.length - 1 : index - 1]
              }
            />
          );
        })}
      </ProjectListContainer>
    </Container>
  );
});
