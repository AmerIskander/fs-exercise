import { Component } from '@angular/core';
import { CustomTableComponent } from '../../../shared/custom-table/custom-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-session-playlist',
  standalone: true,
  imports: [CustomTableComponent, CommonModule],
  templateUrl: './session-playlist.component.html',
  styleUrl: './session-playlist.component.css'
})

export class SessionPlaylistComponent {
  title = 'Session Playlist';
  sessionData: sessionDataItem[] = [
    {
      column1: {
        url: 'assets/icons/excitedFace.svg',
        nickname: '@fullsession.io',
        email: 'seo@fullsession.io'
      },
      column2: {
        url: 'assets/icons/excitedFace.svg',
        sessionName: 'online - 322 sessions',
        details: '1 Event Live'
      },
      column3: {
        title: 'Ramallah',
        details: 'Desktop - OS X'
      }
    },
    {
      column1: {
        url: 'assets/icons/excitedFace.svg',
        nickname: '@protonmail.com',
        email: 'wonfs@protonmail.com'
      },
      column2: {
        url: 'assets/icons/excitedFace.svg',
        sessionName: '9/13 9:58 PM - 54 sessions',
        details: '14 Events'
      },
      column3: {
        title: 'Tubas',
        details: 'Desktop - Windows'
      }
    },
    {
      column1: {
        url: 'assets/icons/excitedFace.svg',
        nickname: '@protonmail.com',
        email: 'wonfs@protonmail.com'
      },
      column2: {
        url: 'assets/icons/excitedFace.svg',
        sessionName: '9/13 9:58 PM - 54 sessions',
        details: '14 Events'
      },
      column3: {
        title: 'Tubas',
        details: 'Desktop - Windows'
      }
    },
    {
      column1: {
        url: 'assets/icons/excitedFace.svg',
        nickname: '@protonmail.com',
        email: 'wonfs@protonmail.com'
      },
      column2: {
        url: 'assets/icons/excitedFace.svg',
        sessionName: '9/13 9:58 PM - 54 sessions',
        details: '14 Events'
      },
      column3: {
        title: 'Tubas',
        details: 'Desktop - Windows'
      }
    },
  ];
}

interface sessionDataItem {
  column1: {
    url: string;
    nickname: string;
    email: string;
  };
  column2: {
    url: string;
    sessionName: string;
    details: string;
  };
  column3: {
    title: string;
    details: string;
  };
}