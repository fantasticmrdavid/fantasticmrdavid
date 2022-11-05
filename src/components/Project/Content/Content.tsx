import React, { memo } from 'react';
import { ProjectMedia } from 'components/ProjectMedia/ProjectMedia';
import { ProjectData } from 'data/projects';
import { Action } from '../Action/Action';
import {
  ActionsContainer,
  Container,
  Section,
  Label,
  Copy,
  Link,
  LinkWrapper,
  MediaWrapper,
  Spacer,
} from './content.styles';

export type ContentProps = {
  isCurrent: boolean,
  nextProject: ProjectData,
  previousProject: ProjectData,
} & ProjectData;

export const Content = memo(
  (props: ContentProps) => {
    const {
      title,
      url,
      products,
      technologies,
      description,
      media,
      nextProject,
      previousProject,
      isCurrent,
    } = props;

    const descriptionMarkup = { __html: description };

    return (
      <Container current={isCurrent}>
        { isCurrent && <div id="projectContentTop" /> }
        { !!products && (
          <Section>
            <Label>Products</Label>
            <Copy>{ products }</Copy>
          </Section>
        )}
        <Section>
          <Label>Technologies</Label>
          <Copy>{ technologies }</Copy>
        </Section>

        <Section>
          <Label>Description</Label>
          <Copy dangerouslySetInnerHTML={descriptionMarkup} />
        </Section>
        {
          !!url
          && (
            <LinkWrapper>
              <Link href={url} target="_blank" rel="noopener noreferrer">Visit { title }</Link>
            </LinkWrapper>
          )
        }
        <MediaWrapper>
          {
            !!media && media.map((m) => (
              <ProjectMedia {...m} noSiblings={media.length === 1} key={`ProjectMedia_${m.slug}`} />
            ))
          }
        </MediaWrapper>
        <Spacer />
        <ActionsContainer>
          <Action label="Previous" type="back" project={previousProject} />
          <Action label="Next" type="next" project={nextProject} />
        </ActionsContainer>
      </Container>
    );
  },
);
