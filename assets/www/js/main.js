enchant(); // ���܂��Ȃ�
 
window.onload = function() {
 
    // �s�̏I���ɂ́A;�i�Z�~�R�����j��t���܂��B
 
    var game = new Game(320, 320); // �Q�[���{�̂���������Ɠ����ɁA�\�������̈�̑傫����ݒ肵�Ă��܂��B
    game.fps = 24; // frames�i�t���[���jper�i���jsecond�i�b�j�F�Q�[���̐i�s�X�s�[�h��ݒ肵�Ă��܂��B
    game.preload('./images/chara1.png'); // pre�i�O�j-load�i�ǂݍ��݁j�F�Q�[���Ɏg���f�ނ����炩���ߓǂݍ���ł����܂��B
 
    game.onload = function() { // �Q�[���̏������������烁�C���̏��������s���܂��B
 
        var kuma = new Sprite(32, 32);  // ���܂Ƃ����X�v���C�g(����\�ȉ摜)����������Ɠ����ɁA�X�v���C�g�̕\�������̈�̑傫����ݒ肵�Ă��܂��B
        kuma.image = game.assets['./images/chara1.png']; // ���܂ɂ��炩���߃��[�h���Ă������摜��K�p���܂��B
        kuma.x = 100; // ���܂̉��ʒu��ݒ肵�܂��B
        kuma.y = 120; // ���܂̏c�ʒu��ݒ肵�܂��B
        game.rootScene.addChild(kuma); // �Q�[���̃V�[���ɂ��܂�\�������܂��B
        game.rootScene.backgroundColor  = '#7ecef4'; // �Q�[���̓��암���̔w�i�F��ݒ肵�Ă��܂��B
 
 		// �V�[���Ɂu���t���[�����s�C�x���g�v��ǉ����܂��B
        game.rootScene.addEventListener(Event.ENTER_FRAME, function() {
            kuma.x += 1; // ���t���[���A���܂̍��W���E��1px�����炷
        });
    }
    game.start(); // �Q�[�����X�^�[�g�����܂�
    // ���̂悤�ɃX���b�V��2�ŏ����n�߂��s�́u�R�����g�v�����ƂȂ�܂��B
    // �v���O�������̃����Ƃ��Ċ��p���܂��傤�B
    /* �܂��A���̂悤�ɃX���b�V���ƕĈ���g���ƁA
        �����s�ɓn���ăR�����g���������Ƃ��ł��܂��B */
};
