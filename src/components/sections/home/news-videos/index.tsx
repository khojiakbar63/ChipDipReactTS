import React from 'react'
import {News} from './news'
import { Video } from './video';
import './_style.scss'
import { Container } from '../../../layouts/container/index';
export const NewsVideos: React.FC = () => {
  return (
        <Container >
            <div className="newsVideos">
                <Video/>
                <News/>
            </div>
        </Container>
  )
}
